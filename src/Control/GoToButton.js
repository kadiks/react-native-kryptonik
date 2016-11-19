/**
 * @class Kryptonik.Control.GoToButton
 */

import React, { Component } from 'react';

import Button from '../Element/Button';

class GoToButton extends Component {
  goTo() {
    const nav = this.props.navigator;
    const title = this.props.title || null;
    const id = this.props.screen;
    const passProps = this.props.passProps || {};

    nav.push({
      id,
      title,
      passProps,
    });
  }

  render() {
    return (
      <Button
        onPress={this.goTo.bind(this)}
        style={[this.props.style]}>
        {this.props.children}
      </Button>
    );
  }

}

GoToButton.propTypes = {
  children: React.PropTypes.node,
  navigator: React.PropTypes.object,
  passProps: React.PropTypes.object,
  screen: React.PropTypes.string,
  style: React.PropTypes.object,
  title: React.PropTypes.string,
};

export default GoToButton;
