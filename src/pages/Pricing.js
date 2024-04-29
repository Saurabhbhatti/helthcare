import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import graph from '../Assets/Image/Graph.png';

const Pricing = () => {
  const tableContainerStyle = {
    overflowX: 'auto',
    borderRadius: '10px',
    width: '70%',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const tableHeaderCellStyle = {
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
  };

  const tableRowStyle = {
    '&:nth-of-type(odd)': {
      backgroundColor: '#fafafa',
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
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" style={{ margin: '20px 0', color: '#333' }}>Choose Your Plan</Typography>
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
        <img src={graph} alt="Description of the image" style={{ maxWidth: '100%', display: 'block', margin: '40px auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
