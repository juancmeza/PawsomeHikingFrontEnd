import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 315,
  },
});

const formatTime = (inputTime) => {

  const options = {
    timeZone:"Canada/Central",
    hour12 : true,
    hour:  "numeric",
    minute: "numeric",seconds:"numeric"
 }

 return new Date(inputTime).toLocaleTimeString("en-US",options)

}


const formatDate = (inputDate) => {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
    // Months use 0 index.
    return (
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
  }
}

export default function TripCard({trip}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{ backgroundColor: "#268397" }}>
      <CardContent>
        <Typography className={classes.title} >
          Location: {trip.location}
        </Typography>
        <Typography className={classes.title} >
          Date: {formatDate(trip.date)}
        </Typography>
        <Typography className={classes.title} >
          Time: {formatTime(trip.time)}
        </Typography>
        <CardMedia
          className={classes.media}
          image="http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg"
          title="Fort Funston"
        />
      </CardContent>
    </Card>
  );
}

