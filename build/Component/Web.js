Object.defineProperty(exports,"__esModule",{value:true});


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _Global=require('../../../../src/Global');var _Global2=_interopRequireDefault(_Global);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// eslint-disable-line import/no-unresolved

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
paddingTop:_Global2.default.size.navbar},

icon:{
height:30,
width:30},

item:{
flex:1,
flexDirection:'row'},

title:{
color:_Global2.default.color.body}});/**
 * @class Kryptonik.Component.Web
 */

var Web=function Web(props){return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.WebView,{
url:props.url})));};



Web.propTypes={
url:_react2.default.PropTypes.string};exports.default=


Web;