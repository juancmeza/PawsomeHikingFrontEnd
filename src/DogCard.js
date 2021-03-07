import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DogCard({dog}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} >
          Name: {dog.name}
        </Typography>
        <Typography className={classes.title} >
          Weight: {dog.weight}
        </Typography>
        <Typography className={classes.title} >
          Breed: {dog.breed}
        </Typography>
        <Typography className={classes.title} >
          Age: {dog.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
