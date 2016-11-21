Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _Global=require('../../../../src/Global');var _Global2=_interopRequireDefault(_Global);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// eslint-disable-line import/no-unresolved

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
paddingTop:_Global2.default.size.toolbar}});var



Web=function(_React$Component){_inherits(Web,_React$Component);function Web(){_classCallCheck(this,Web);return _possibleConstructorReturn(this,(Web.__proto__||Object.getPrototypeOf(Web)).apply(this,arguments));}_createClass(Web,[{key:'render',value:function render()





{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.WebView,{
source:{uri:this.props.url}})));


}}]);return Web;}(_react2.default.Component);Web.propTypes={url:_react2.default.PropTypes.string};exports.default=



Web;