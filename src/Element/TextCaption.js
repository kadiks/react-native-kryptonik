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

class TextCaption extends Text {
  render() {
    return (
      <Text style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

export default TextCaption;
