// react modules
import _ from 'lodash';
// exports modules
import { exportToCsv } from './csv';
import { exportToPrint } from './print';

export function getExportClick({ id, key, columns = [], items = {}, isSelected = false, selected = [] }) {
  return _.isEqual(key, 'csv') ? () => { exportToCsv(id, columns, isSelected, selected); }
    : _.isEqual(key, 'print') ? () => { exportToPrint(id, columns, isSelected, selected); }
      : null;
}

export function getExportTitle(item) {
  return _.isEqual(_.get(item, 'key'), 'csv') ? _.get(item, 'title', 'CSV')
  : _.isEqual(_.get(item, 'key'), 'excel') ? _.get(item, 'title', 'Excel')
  : _.isEqual(_.get(item, 'key'), 'pdf') ? _.get(item, 'title', 'PDF')
  : _.isEqual(_.get(item, 'key'), 'print') ? _.get(item, 'title', 'Print')
  : null;
}
