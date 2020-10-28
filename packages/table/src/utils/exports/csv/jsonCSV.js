function convertCSV(obj) {
  const array = typeof obj !== 'object' ? JSON.parse(obj) : obj;
  let str = '';

  for (let i = 0; i < array.length; i++) {
    let line = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const index in array[i]) {
      if (line !== '') line += ',';

      line += array[i][index];
    }

    str += `${line}\r\n`;
  }

  return str;
}

export function exportJsonToCsv(headers, items) {
  if (headers) {
    items.unshift(headers);
  }

  // Convert Object to JSON
  const jsonObject = JSON.stringify(items);
  const csv = convertCSV(jsonObject);
  const exportedFilenmae = 'download.csv';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    const link = document.createElement('a');

    if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);

      link.setAttribute('href', url);
      link.setAttribute('download', exportedFilenmae);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
