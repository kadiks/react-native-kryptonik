/**
 * @class Krypton.Element.TextHeader
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
    fontWeight: 'bold',
    fontSize: Global.size.header,
    marginBottom: 30,
  },
});

const TextHeader = (props) => (
  <Text style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

export default TextHeader;
