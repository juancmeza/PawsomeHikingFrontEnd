import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
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
    boxShadow: '0 8px 24px 0 rgba(0.12,0.1,0.1,0)',
    borderColor: '#80b5c1'
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


export default function AcccessibleTable({trips, userTripsOnly, user, selectTrip}) {
  
  const classes = useStyles();

  const showTrips = (trips) => {

    let uniqueTrips = [...new Set(trips)]
      
    let tripIds = user.trips.map(trip => trip.id)
    
    return uniqueTrips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <TableRow>
          <TableCell className={classes.text}>{formatDate(date)}</TableCell>
          <TableCell align="left" className={classes.text}>{location}</TableCell>
          <TableCell align="left" className={classes.text}>{formatTime(time)}</TableCell>
          <TableCell>
                {userTripsOnly ?
                <Button id={id} variant='outline-info'>Cancel</Button> :
                tripIds.includes(id) ?
                <Button id={id} variant='outline-info'>Cancel</Button> :
                <Link to ='bookTrip'><Button id={id} variant='outline-info' onClick={() => selectTrip(id)}>Book Trip!</Button></Link>
                }
          </TableCell>
      </TableRow>
      )
    })
  }


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
          {showTrips(trips)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}