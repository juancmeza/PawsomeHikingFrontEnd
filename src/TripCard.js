import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TripCard({trip}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} >
          Location: {trip.location}
        </Typography>
        <Typography className={classes.title} >
          Date: {trip.date}
        </Typography>
        <Typography className={classes.title} >
          Time: {trip.time}
        </Typography>
      </CardContent>
    </Card>
  );
}

