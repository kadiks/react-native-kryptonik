Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _Global=require('../../../../src/Global');var _Global2=_interopRequireDefault(_Global);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// eslint-disable-line import/no-unresolved

var CustomActivityIndicator=function CustomActivityIndicator(props){return(
_react2.default.createElement(_reactNative.ActivityIndicator,{
color:_Global2.default.color.body,
style:props.style}));};exports.default=


CustomActivityIndicator;