import _ from 'lodash';

export function onTags(tool, tag) {
  if (_.isEqual(tool, 'trash')) {
    const doc = document.getElementById('containerEditable');

    doc.innerHTML = '';
    doc.focus();
  } else {
    document.execCommand(tool, false, tag);
  }
}
