/**
 * @class Kryptonik.Element.Button
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Global from '../../../../src/Global'; // eslint-disable-line import/no-unresolved
import TextBody from './TextBody';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Global.color.secondary,
    borderRadius: 5,
    color: Global.color.primary,
    padding: 10,
    textAlign: 'center',
  },
});

class Button extends TouchableOpacity {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <TextBody style={[this.props.style, styles.button]}>
          {this.props.children}
        </TextBody>
      </TouchableOpacity>
    );
  }
}

export default Button;
