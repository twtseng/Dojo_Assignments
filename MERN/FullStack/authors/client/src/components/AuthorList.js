import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { navigate } from '@reach/router';
import axios from 'axios';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const AuthorList = props => {
    const deleteAuthor = authorId => {
      axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
      .then(response => {
          props.refreshAuthors();
      });
    }
    return (
      <Grid xs={4}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Author name</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.authors.map((row) => (
                <StyledTableRow  key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>
                  <Grid container spacing={1}>
                      <Grid item xs={4}>
                      <Button variant="contained" color="primary" onClick={() => navigate(`/edit/${row._id}`)}>Edit</Button>
                      </Grid>
                      <Grid item xs={4}>
                      <Button variant="contained" color="primary" onClick={() => deleteAuthor(row._id)}>Delete</Button>
                      </Grid>
                  </Grid>
                  </StyledTableCell>
                </StyledTableRow >
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={() => navigate(`/new`)}>Add new</Button>
      </Grid>
    );
}

export default AuthorList;