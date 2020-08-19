import _ from 'lodash';

export function exportToPrint(tableId, columns = []) {
  const printContext = document.getElementById(tableId);
  const row = printContext.rows;

  for (let i = 0; i < row[0].cells.length; i++) {
    if (!_.includes(columns, i) && !_.isEmpty(columns)) {
      for (let j = 0; j < row.length; j++) {
        row[j].deleteCell(i);
      }
    }
  }

  const printWindow = window.open('', 'width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes');
  const htmlToPrint = `
    <!doctype html>
    <html>
      <head><title>Print</title></head>
      <style>
      body {
        font-family: arial;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0;
      }
      table thead tr {
        border: 1px solid #e4e7eb;
        background-color: #f5f6f7;
      }
      table thead tr th {
        font-size: 14px;
        font-weight: 600;
        color: #425a70;
        padding: 8px;
        text-align: left;
      }
      table thead tr th span {
        margin-right: 10px;
      }
      table tbody tr {
        border: 1px solid #e4e7eb;
      }
      table tbody tr td {
        font-size: 14px;
        color: #425a70;
        text-align: left;
        padding: 12px 8px;
      }
      table tbody .active {
        border: 1px solid #f5f6f7;
      }
      table tbody .not-found {
        text-align: center;
      }
      </style>
      <body onload="print();">
        ${printContext.outerHTML}
      </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlToPrint);
  printWindow.document.close();
}
