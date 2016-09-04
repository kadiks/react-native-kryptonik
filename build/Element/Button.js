Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _Global=require('../../../../src/Global');var _Global2=_interopRequireDefault(_Global);
var _TextBody=require('./TextBody');var _TextBody2=_interopRequireDefault(_TextBody);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * @class Kryptonik.Element.Button
 */// eslint-disable-line import/no-unresolved
var styles=_reactNative.StyleSheet.create({button:{
backgroundColor:_Global2.default.color.secondary,
borderRadius:5,
color:_Global2.default.color.primary,
padding:10,
textAlign:'center'}});var



Button=function(_TouchableOpacity){_inherits(Button,_TouchableOpacity);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.props.onPress},
_react2.default.createElement(_TextBody2.default,{style:[this.props.style,styles.button]},
this.props.children)));



}}]);return Button;}(_reactNative.TouchableOpacity);exports.default=


Button;