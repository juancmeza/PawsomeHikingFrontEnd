import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    background: 'transparent',
  },

  text: {
    color: '#80b5c1'
  }
});


export default function AcccessibleTable({trips}) {
  const classes = useStyles();


  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.text} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.text}>Date</TableCell>
            <TableCell align="right" className={classes.text}>Location</TableCell>
            <TableCell align="right" className={classes.text}>Time</TableCell>
            <TableCell align="right" className={classes.text}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((trip) => (
            <TableRow key={trip.date}>
              <TableCell className={classes.text}>
                {trip.date}
              </TableCell>
              <TableCell align="right" className={classes.text}>{trip.location}</TableCell>
              <TableCell align="right" className={classes.text}>{trip.time}</TableCell>
              <TableCell align="right" className={classes.text}>Button</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}