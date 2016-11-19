import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import Global from '../../../../src/Global'; // eslint-disable-line import/no-unresolved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Global.size.toolbar
  },
});

class Web extends React.Component {

  static propTypes = {
    url: React.PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: this.props.url }} />
      </View>
    );
  }

}

export default Web;
