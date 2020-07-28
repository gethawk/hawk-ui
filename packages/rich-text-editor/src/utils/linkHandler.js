import _ from 'lodash';

let fragment = null;
let range = null;

export function onSaveSelection() {
  if (window.getSelection) {
    const sel = window.getSelection();

    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }

  return null;
}

export function onSaveRangeEvent() {
  range = this.onSaveSelection();

  if (range && !range.collapsed) {
    fragment = range.cloneContents();
  }
}

export function onLinkFocus() {
  if (fragment) {
    const span = document.createElement('span');

    span.className = 'selected';
    range.surroundContents(span);
  }
}

export function onLinkBlur() {
  if (fragment) {
    range.deleteContents();
    range.insertNode(fragment);
  }
}

export function onLinkInsert(value) {
  const link = document.createElement('a');

  link.href = value;
  range.surroundContents(link);
}
