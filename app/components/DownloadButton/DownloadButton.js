import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function JsonToExcel({ jsonData, fileName , Style }) {
  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    // Convert JSON to Excel
    const sanitizedData = jsonData.map(({ $id, $createdAt, $updatedAt, $permissions, $databaseId, $collectionId, ...rest }) => rest);
    const ws = XLSX.utils.json_to_sheet(sanitizedData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Create a Blob from the Excel data
    const blob = new Blob([excelBuffer], { type: fileType });

    // Save the Excel file
    saveAs(blob, fileName + fileExtension);
  };

  return (
    <button className={Style.button} onClick={exportToExcel}>Export to Excel</button>
  );
}
