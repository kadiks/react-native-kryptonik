Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _Global=require('../../../../src/Global');var _Global2=_interopRequireDefault(_Global);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * @class Krypton.Element.TextHeader
 */// eslint-disable-line import/no-unresolved
var styles=_reactNative.StyleSheet.create({text:{
backgroundColor:'transparent',
color:_Global2.default.color.body,
fontFamily:_Global2.default.font.body,
fontWeight:'bold',
fontSize:_Global2.default.size.header,
marginBottom:30}});var



TextHeader=function(_Text){_inherits(TextHeader,_Text);function TextHeader(){_classCallCheck(this,TextHeader);return _possibleConstructorReturn(this,(TextHeader.__proto__||Object.getPrototypeOf(TextHeader)).apply(this,arguments));}_createClass(TextHeader,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.Text,{style:[styles.text,this.props.style]},
this.props.children));


}}]);return TextHeader;}(_reactNative.Text);exports.default=



TextHeader;