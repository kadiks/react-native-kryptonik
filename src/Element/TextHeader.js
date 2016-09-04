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

class TextHeader extends Text {

  render() {
    return (
      <Text style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }

}

export default TextHeader;