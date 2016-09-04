/**
 * @class Krypton.Utils.MomentLocales
 */
'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}


var DeviceInfo=require('react-native-device-info');var


MomentLocales=function(){function MomentLocales(){_classCallCheck(this,MomentLocales);}_createClass(MomentLocales,[{key:'getLanguage',value:function getLanguage()
{
var locale=DeviceInfo.getDeviceLocale();
return locale.substr(0,2);
}},{key:'getModule',value:function getModule(

language){
var modules={
'en':require('moment/locale/en-gb'),
'es':require('moment/locale/es'),
'fr':require('moment/locale/fr')};

if(!modules.hasOwnProperty(language)){
language='en';
}
return modules[language];
}}]);return MomentLocales;}();


module.exports=new MomentLocales();