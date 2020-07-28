export function onCode(isSource, editableId) {
  let content;
  const doc = document.getElementById(editableId);

  if (isSource) {
    content = document.createTextNode(doc.innerHTML);
    doc.innerHTML = '';
    const pre = document.createElement('pre');

    doc.contentEditable = false;
    pre.id = 'sourceText';
    pre.contentEditable = true;
    pre.appendChild(content);
    doc.appendChild(pre);
    document.execCommand('defaultParagraphSeparator', false, 'div');
  } else {
    if (document.all) {
      doc.innerHTML = doc.innerText;
    } else {
      content = document.createRange();
      content.selectNodeContents(doc.firstChild);
      doc.innerHTML = content.toString();
    }
    doc.contentEditable = true;
  }
}
