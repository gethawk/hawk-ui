// react modules
import _ from 'lodash';
// exports modules
import { exportTableToCsv } from './csv/tableCSV';
import { exportJsonToCsv } from './csv/jsonCSV';
import { exportToPrint } from './print';

export function getExportClick({ id, key, columns = [], headers = {}, content = [], isSelected = false, selected = [] }) {
  if (!_.isEmpty(columns)) {
    return _.isEqual(key, 'csv') ? () => { exportTableToCsv(id, columns, isSelected, selected); }
    : _.isEqual(key, 'print') ? () => { exportToPrint(id, columns, isSelected, selected); }
      : null;
  }

  return _.isEqual(key, 'csv') ? () => { exportJsonToCsv(headers, content); }
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
