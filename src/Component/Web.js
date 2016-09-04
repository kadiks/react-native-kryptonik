/**
 * @class Kryptonik.Component.Web
 */
import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import Global from '../../../../src/Global'; // eslint-disable-line import/no-unresolved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Global.size.navbar,
  },
  icon: {
    height: 30,
    width: 30,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: Global.color.body,
  },
});

const Web = (props) => (
  <View style={styles.container}>
    <WebView
      url={props.url} />
  </View>
);

Web.propTypes = {
  url: React.PropTypes.string,
};

export default Web;
