import _ from 'lodash';

function downloadCSV(csv, filename) {
  // CSV FILE
  const csvFile = new Blob([csv], { type: 'text/csv' });

  // Download link
  const downloadLink = document.createElement('a');

  // File name
  downloadLink.download = filename;

  // We have to create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Make sure that the link is not displayed
  downloadLink.style.display = 'none';

  // Add the link to your DOM
  document.body.appendChild(downloadLink);

  // Lanzamos
  downloadLink.click();
}

export function exportToCsv(tableId, columns = []) {
  const filename = 'download.csv';
  const csv = [];
  const rows = document.getElementById(tableId).querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = [];
    const cols = rows[i].querySelectorAll('td, th');

    for (let j = 0; j < cols.length; j++) {
      if (_.includes(columns, j) && !_.isEmpty(columns)) {
        row.push(cols[j].innerText);
      }
      if (_.isEmpty(columns)) {
        row.push(cols[j].innerText);
      }
    }
    csv.push(row.join(','));
  }

  downloadCSV(csv.join('\n'), filename);
}
