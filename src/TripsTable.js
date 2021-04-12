import React from 'react';
import Button from 'react-bootstrap'
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

const formatDate = (inputDate) => {
  var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return (
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
      );
    }
}

const formatTime = (inputTime) => {

  const options = {
    timeZone:"Canada/Central",
    hour12 : true,
    hour:  "numeric",
    minute: "numeric",seconds:"numeric"
 }

 return new Date(inputTime).toLocaleTimeString("en-US",options)

}


export default function AcccessibleTable({trips}) {
  const classes = useStyles();


  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.text} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.text}>Date</TableCell>
            <TableCell align="left" className={classes.text}>Location</TableCell>
            <TableCell align="left" className={classes.text}>Time</TableCell>
            <TableCell align="left" className={classes.text}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((trip) => (
            <TableRow key={trip.date}>
              <TableCell className={classes.text}>
                {formatDate(trip.date)}
              </TableCell>
              <TableCell align="left" className={classes.text}>{trip.location}</TableCell>
              <TableCell align="left" className={classes.text}>{formatTime(trip.time)}</TableCell>
              <TableCell align="left" className={classes.text}>Button</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}