export function onImageTag(data) {
  const doc = document.getElementById('containerEditable1');

  doc.focus();
  document.execCommand('insertImage', false, `${data.link}`);
}
