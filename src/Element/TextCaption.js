/**
 * @class Krypton.Element.TextCaption
 */

import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Global from '../../../../src/Global'; // eslint-disable-line import/no-unresolved

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    color: Global.color.body,
    fontFamily: Global.font.body,
    fontSize: Global.size.caption,
  },
});

const TextCaption = (props) => (
  <Text style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

export default TextCaption;
