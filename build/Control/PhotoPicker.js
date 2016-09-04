/**
 * @class Krypton.Control.PhotoPicker
 *
 * @uses Krypton.Element.TextBody
 */
'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=require('react-native');var

Component=






React.Component;var Dimensions=React.Dimensions;var Image=React.Image;var ListView=React.ListView;var StyleSheet=React.StyleSheet;var TouchableOpacity=React.TouchableOpacity;var View=React.View;

var
Facebook=require('../Utils/Facebook'),
TextBody=require('../Element/TextBody');

/**
 * @param {Object} props
 * @param {Array} props.pictures 
 * @param {Function} props.selectedUri
 * @param {Object} props.styles
 * @param {Object} props.styles.container
 * @param {Number} props.styles.container.paddingTop Put the toolbar height
 * @param {Number} props.styles.container.backgroundColor
 * @param {String} [props.loadingText="Loading..."]
 */var
PhotoPicker=function(_Component){_inherits(PhotoPicker,_Component);

function PhotoPicker(props){_classCallCheck(this,PhotoPicker);var _this2=_possibleConstructorReturn(this,(PhotoPicker.__proto__||Object.getPrototypeOf(PhotoPicker)).call(this,
props));
_this2.state={
dataSource:new ListView.DataSource({
rowHasChanged:function rowHasChanged(row1,row2){return row1!==row2;}}),

isLoaded:false};

_this2.facebook=new Facebook();return _this2;
}_createClass(PhotoPicker,[{key:'componentDidMount',value:function componentDidMount()

{
var _this=this;
this.fetchPictures().then(function(pictures){
_this.setState({
dataSource:_this.state.dataSource.cloneWithRows(pictures),
isLoaded:true});

});
}},{key:'fetchPictures',value:function fetchPictures()

{
return this.facebook.getProfilePictures();
}},{key:'render',value:function render()

{
if(this.state.isLoaded===false){
return this.renderLoadingView();
}

return(
/* beautify ignore:start */
/* jshint ignore:start */
React.createElement(View,{style:[this.props.styles.container,styles.container]},
React.createElement(ListView,{
contentContainerStyle:styles.contentContainerStyle,
dataSource:this.state.dataSource,
renderRow:this.renderPhoto.bind(this),
style:styles.listView}))

/* jshint ignore:end */
/* beautify ignore:end */);

}},{key:'renderLoadingView',value:function renderLoadingView()

{
return(
/* beautify ignore:start */
/* jshint ignore:start */
React.createElement(View,{style:styles.container},
React.createElement(TextBody,{style:styles.loading},this.props.loadingText))

/* jshint ignore:end */
/* beautify ignore:end */);

}},{key:'renderPhoto',value:function renderPhoto(

uri){var _this3=this;
console.log('>> Krypton/Control/PhotoPicker#renderPhoto');
//  console.log('Krypton/Control/PhotoPicker#renderPhoto item', item);

return(
/* beautify ignore:start */
/* jshint ignore:start */
React.createElement(TouchableOpacity,{
onPress:function onPress(){
_this3.props.selectedUri(uri);
_this3.props.navigator.pop();
},
style:styles.imageContainer},
React.createElement(Image,{
source:{uri:uri},
style:[this.props.styles.image,styles.image]}))

/* jshint ignore:end */
/* beautify ignore:end */);

}}]);return PhotoPicker;}(Component);



var styles=StyleSheet.create({
contentContainerStyle:{
flex:1,
flexDirection:'row',
flexWrap:'wrap'},

container:{
flex:1,
flexDirection:'row'},

image:{
backgroundColor:'red',
height:Dimensions.get('window').width/3,
width:Dimensions.get('window').width/3},

imageContainer:{
height:Dimensions.get('window').width/3,
width:Dimensions.get('window').width/3},

listView:{}});




module.exports=PhotoPicker;