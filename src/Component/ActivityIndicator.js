import React from 'react';
import {
  ActivityIndicator,
} from 'react-native';


import Global from '../../../../src/Global'; // eslint-disable-line import/no-unresolved

const CustomActivityIndicator = (props) => (
  <ActivityIndicator
    color={Global.color.body}
    style={props.style} />
);

export default CustomActivityIndicator;
