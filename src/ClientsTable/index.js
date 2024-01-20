import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientsTable.css';

const DynamicTable = ({ data }) => {
  
  const navigate = useNavigate();

  const headers = ["#", "nombre", "apellido", "# de cuenta"];

  try {
    const clientDetail = (accountNumber) => {
      navigate(`/admin/client-detail/${accountNumber}`)
    };
  
    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => clientDetail(row["# de cuenta"])}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch(err) {
    console.error('Error: ', err);
  }
  
};

export default DynamicTable;
