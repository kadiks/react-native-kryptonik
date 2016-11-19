/**
 * @class Kryptonik.Element.TextBody
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
    fontSize: Global.size.body,
  },
});

const TextBody = (props) => (
  <Text style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

export default TextBody;
