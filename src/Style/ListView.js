/**
 * @class Krypton.Style.ListView
 */

import Global from '../../../../src/Global'; // eslint-disable-line import/no-unresolved

const styles = {
  borderColor: 'rgba(255, 255, 255, .1)',
  borderWidth: 1,
  gradient: [Global.color.secondary, Global.color.secondary],
  item: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: Global.size.screenMargin,
    paddingRight: Global.size.screenMargin,
  },
  itemContainer: {
    marginBottom: 1,
  },
  underlayColor: 'rgba(255, 255, 255, .175)',
};

export default styles;
