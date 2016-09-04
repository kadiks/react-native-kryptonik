/**
 * @class Krypton.Utils.Facebook
 */
'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var
FBSDKCore=require('react-native-fbsdkcore');var


FBSDKGraphRequest=
FBSDKCore.FBSDKGraphRequest;var

Facebook=function(){function Facebook(){_classCallCheck(this,Facebook);}_createClass(Facebook,[{key:'isLoggedIn',value:function isLoggedIn()

{
var _this=this;
return new Promise(function(resolve,reject){
_this._buildRequest({
url:'me?fields=id'}).
then(function(res){
if(!isNaN(res.id)){
resolve(parseInt(res.id,10));
}else{
reject();
}
},function(err){return reject(err);});
});
}},{key:'getProfile',value:function getProfile()

{
var _this=this;
return new Promise(function(resolve,reject){
_this._buildRequest({
url:'me?fields=id,first_name,birthday,email,gender'}).
then(function(res){return resolve(res);},function(err){return reject(err);});
});
}},{key:'getProfilePictures',value:function getProfilePictures()

{
console.log('>> Utils/Facebook#getProfilePictures');
var _this=this;
return new Promise(function(resolve,reject){
_this._buildRequest({
url:'me?fields=albums'}).
then(function(res){
console.log('Utils/Facebook#getProfilePictures #1',res);

var profilePicturesAlbumId=null;
res.albums.data.forEach(function(album){
//console.log('Utils/Facebook#getProfilePictures #2', album);
if(album.name==='Profile Pictures'){
profilePicturesAlbumId=album.id;
}
});
//console.log('profilePicturesAlbumId:', profilePicturesAlbumId);
_this._buildRequest({
url:profilePicturesAlbumId+'/photos?fields=source'}).
then(function(res){
var pictures=[];
res.data.forEach(function(picture){return pictures.push(picture.source);});
resolve(pictures);
},function(err){return reject(err);});
},function(err){return reject(err);});
});
}},{key:'_buildRequest',value:function _buildRequest(

params){
return new Promise(function(resolve,reject){
var
o=params||{},
url=o.url||null,
request=null;

if(url===null){
reject('#_buildRequest - Parameter [url] is missing');
return;
}

request=new FBSDKGraphRequest(function(err,res){
if(err){
reject(err);
return;
}
resolve(res);
},url);
request.start();
});
}}]);return Facebook;}();



module.exports=Facebook;