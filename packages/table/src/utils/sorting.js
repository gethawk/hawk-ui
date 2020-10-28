import _ from 'lodash';
import { sortOrders } from '../constants';

export function keyMirror(keys) {
  return keys.reduce((result, key) => ({ ...result, [key]: key }), {});
}

export function sortByColumn(columnKey, object, order) {
  const sortedObject = _.orderBy(object, [columnKey], ['desc']);

  return _.isEqual(order, sortOrders.DESCENDING) ? _.reverse(sortedObject) : sortedObject;
}
