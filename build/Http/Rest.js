Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();/**
 * @class Kryptonik.Http.Rest
 */

var _reactNative=require('react-native');




var _config=require('../../../../config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// eslint-disable-line import/no-unresolved
var
Api=function(){

function Api(){_classCallCheck(this,Api);
var port=_config2.default.port.length>0?':'+_config2.default.port:'';
var apiEndpoint=_config2.default.apiEndpoint?_config2.default.apiEndpoint:'';
this.rootUrl=_config2.default.protocol+'://'+_config2.default.host+port+apiEndpoint;

// Fix iOS bug: https://github.com/facebook/react-native/issues/8469
_reactNative.NetInfo.isConnected.addEventListener('change',Function.prototype);
}

/**
   * @param {Object} params
   * @param {String} params.url
   * @param {Object} [params.headers={}]
   * @param {String} [params.method='GET']
   * @param {String} [params.timeout=3000]
   */_createClass(Api,[{key:'load',value:function load(_ref)
{var _this=this;var _ref$url=_ref.url;var url=_ref$url===undefined?null:_ref$url;var _ref$body=_ref.body;var body=_ref$body===undefined?{}:_ref$body;var _ref$headers=_ref.headers;var headers=_ref$headers===undefined?{}:_ref$headers;var _ref$method=_ref.method;var method=_ref$method===undefined?'GET':_ref$method;var _ref$timeout=_ref.timeout;var timeout=_ref$timeout===undefined?5000:_ref$timeout;
return new Promise(function(resolve,reject){
var request={};
var headerObj=headers;

if(url===null){
reject('Krptonik/Http/Rest#load - Parameter [url] is missing');
return;
}

var fullUrl=_this.rootUrl+url;

headerObj.Accept='application/json';
headerObj['Content-Type']='application/json';

request.method=method;
request.headers=headerObj;

if(method!=='GET'&&method!=='HEAD'){
if(Object.keys(body).length>0){
request.body=JSON.stringify(body);
}
}

_reactNative.NetInfo.isConnected.fetch().then(function(isConnected){
console.log('RNKK Http Rest#load isConnected',isConnected);
if(isConnected===false){
reject({
code:1,
message:'Not connected to the internet'});

return;
}

// PART 2: https://github.com/github/fetch/issues/175#issuecomment-125779262
_this.timeout(timeout,fetch(fullUrl,request)).then(function(response){return response.json();}).
then(function(responseData){
if(typeof responseData.success!=='undefined'&&responseData.success===false){
_this.showError(responseData);
reject(responseData);
return;
}
resolve(responseData);
},function(err){
reject(err);
});
});
});
}},{key:'showError',value:function showError(

err){
if(_config2.default.env!=='PROD'){
var title=['API Error #',err.code].join('');
_reactNative.Alert.alert(title,err.message);
}
}

// PART 1: https://github.com/github/fetch/issues/175#issuecomment-125779262
},{key:'timeout',value:function timeout(ms,promise){
return new Promise(function(resolve,reject){
setTimeout(function(){
reject({
success:false,
code:1,
message:'Request timed out'});

},ms);
promise.then(resolve,reject);
});
}}]);return Api;}();exports.default=



Api;