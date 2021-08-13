import _ from 'lodash';

export function onTags(tool, tag, editableId) {
  if (_.isEqual(tool, 'trash')) {
    const doc = document.getElementById(editableId);

    doc.innerHTML = '';
    doc.focus();
  } else {
    document.execCommand(tool, false, tag);
  }
}
