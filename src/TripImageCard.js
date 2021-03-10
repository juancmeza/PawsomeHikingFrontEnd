import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 240,
  },
});


export default function TripImageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.media}
          image="http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg"
          title="Contemplative Reptile"
        />
    </Card>
  );
}

