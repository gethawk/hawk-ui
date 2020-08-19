function replacer(match, pIndent, pKey, pVal, pEnd) {
  const key = '<span class="key" style="">';
  const val = '<span class="val" style="">';
  const str = '<span class="str" style="">';
  let r = pIndent || '';

  if (pKey) {
    r = `${r + key + pKey.replace(/[": ]/g, '')}</span>: `;
  }
  if (pVal) {
    r = `${r + (pVal[0] === '"' ? str : val) + pVal}</span>`;
  }

  return r + (pEnd || '');
}

export function pretty(obj) {
  const jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;

  return JSON.stringify(obj, null, 3)
    .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(jsonLine, replacer);
}
