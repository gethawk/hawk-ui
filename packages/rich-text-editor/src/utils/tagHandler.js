import _ from 'lodash';

export function onTags(tool, tag, editableId) {
  if (_.isEqual(tool, 'trash')) {
    const doc = document.getElementById(editableId);

    doc.innerHTML = '';
    doc.focus();
  } else {
    console.log('query tool', tool);
    console.log('query tag', tag);
    document.execCommand(tool, false, tag);
  }
}
