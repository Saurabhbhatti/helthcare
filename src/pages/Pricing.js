import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import graph from '../Assets/Image/Graph.png';

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  overflowX: 'auto',
  borderRadius: '10px',
  width: '70%',
  margin: '20px auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const TableHeaderCellStyled = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
}));

const TableRowStyled = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fafafa',
  },
}));

const Pricing = () => {
  const rows = [
    { sku: '1ML', duration: '4 Weeks', patientCost: '$200' },
    { sku: '2ML', duration: '8-10 Weeks', patientCost: '$375' },
    { sku: '5ML', duration: '12-15 Weeks', patientCost: '$700' },
  ];

  return (
    <>
      <Header />
      <Box textAlign="center">
        <Typography variant="h4" sx={{ margin: '20px 0', color: '#333' }}>
          Choose Your Plan
        </Typography>
        <TableContainerStyled component={Paper}>
          <Table sx={{ tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow>
                <TableHeaderCellStyled>SKU#</TableHeaderCellStyled>
                <TableHeaderCellStyled>Duration</TableHeaderCellStyled>
                <TableHeaderCellStyled>Patient Cost</TableHeaderCellStyled>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRowStyled key={index}>
                  <TableCell>{row.sku}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.patientCost}</TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
        <Box
          component="img"
          src={graph}
          alt="Description of the image"
          sx={{
            maxWidth: '100%',
            display: 'block',
            margin: '40px auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>
      <Footer />
    </>
  );
};

export default Pricing;
