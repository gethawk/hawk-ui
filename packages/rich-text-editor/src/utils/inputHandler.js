let fragment = null;
let range = null;

function onSaveSelection() {
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
  range = onSaveSelection();

  if (range && !range.collapsed) {
    fragment = range.cloneContents();
  }
}

export function onInputFocus() {
  if (fragment) {
    const span = document.createElement('span');

    span.className = 'selected';
    range.surroundContents(span);
  }
}

export function onInputBlur() {
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

export function onImageInsert(data) {
  const img = document.createElement('img');

  img.src = data.link;
  img.style.cssText = `width: ${data.width}; height: ${data.height}`;
  range.surroundContents(img);
}
