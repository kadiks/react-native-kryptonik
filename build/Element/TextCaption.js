Object.defineProperty(exports,"__esModule",{value:true});



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _Global=require('../../../../src/Global');var _Global2=_interopRequireDefault(_Global);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// eslint-disable-line import/no-unresolved

var styles=_reactNative.StyleSheet.create({
text:{
backgroundColor:'transparent',
color:_Global2.default.color.body,
fontFamily:_Global2.default.font.body,
fontSize:_Global2.default.size.caption}});/**
 * @class Krypton.Element.TextCaption
 */

var TextCaption=function TextCaption(props){return(
_react2.default.createElement(_reactNative.Text,{style:[styles.text,props.style]},
props.children));};exports.default=



TextCaption;