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

export default function ProfileCard({user}) {
  const classes = useStyles();

  return (
    <div justify='center'>
      <Card className={classes.root} variant="outlined" style={{ backgroundColor: "#268397" }} justify='center' alignItems='center'>
        <CardContent>
          <Typography className={classes.title} >
            Username: {user.username}
          </Typography>
          <Typography className={classes.title} >
            First Name: {user.first_name}
          </Typography>
          <Typography className={classes.title} >
            Last Name: {user.last_name}
          </Typography>
          <Typography className={classes.title} >
            Phone NUmber: {user.phone_number}
          </Typography>
          <Typography className={classes.title} >
            E-mail: {user.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
