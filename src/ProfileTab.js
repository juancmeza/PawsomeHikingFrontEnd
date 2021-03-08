import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileCard from './ProfileCard.js'
import { Link } from 'react-router-dom';
import { Row, Col, Button} from "react-bootstrap"
import DogCard from './DogCard.js'
import Trips from './Trips.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProfileTab({user, selectTrip}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="My Info" {...a11yProps(0)} />
          <Tab label="My Trips" {...a11yProps(1)} />
          <Tab label="My Dogs" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProfileCard user={user}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {user.trips.length > 0 ?
              <Trips user={user} trips={user.trips} userTripsOnly={true} selectTrip={selectTrip}/> :
              <div>
            <h6>You don't have any scheduled trips</h6>
            <div>{console.log(user)}</div>
            <br></br>
            <div>
              <Link to="/upcomingTrips">
                <Button variant='outline-info'>See Upcoming Trips </Button>
              </Link> 
            </div>
          </div>}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {user.dogs.length > 0 ?
          <Row><br></br>{user.dogs.map(dog => <Col><DogCard dog={dog}/></Col>)}</Row> :
          <div>You have not created a profile for your dog(s)</div>
        }
        <Row>
          <Col>
          <Link to="/createDogProfile"><Button variant='outline-info'> Create dog profile </Button></Link>
          </Col>
        </Row>
      </TabPanel>
    </div>
  );
}
