import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Padding } from '@mui/icons-material';

const Pricing = () => {
  const tableContainerStyle = {
    overflowX: 'auto',
    borderRadius: '10px',
    width: '70%',
    margin: '20px auto',
  };

  const tableHeaderCellStyle = {
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
  };

  const tableRowStyle = {
    '&:nth-of-type(odd)': {
      backgroundColor: '#fafafa',
      Padding
    },
  };

  const rows = [
    { sku: '1ML', duration: '4 Week', patientCost: '$250' },
    { sku: '2ML', duration: '8-10 Week', patientCost: '$425' },
    { sku: '5ML', duration: '12-15 Week', patientCost: '$750' },
  ];

  return (
    <>
       <Header />
      <div>
        <TableContainer component={Paper} style={tableContainerStyle}>
          <Table style={{ tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow>
                <TableCell style={tableHeaderCellStyle}>SKU#</TableCell>
                <TableCell style={tableHeaderCellStyle}>Duration</TableCell>
                <TableCell style={tableHeaderCellStyle}>Patient Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} style={tableRowStyle}>
                  <TableCell>{row.sku}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.patientCost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
