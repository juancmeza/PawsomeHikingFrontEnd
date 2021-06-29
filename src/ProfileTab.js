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
import Paws from './Paws.js'

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
    backgroundColor: 'linear-gradient( #032733, #416e7c);',
  },
}));

export default function ProfileTab({user, selectTrip, selectDog, changeLocation, selectedLocation}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className='MainComponents'>
        <AppBar position="static" style={{ backgroundColor: '#268397' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab label="My Info" {...a11yProps(0)} />
            <Tab label="My Trips" {...a11yProps(1)} />
            <Tab label="My Dogs" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Paws />
          <div justify='center'>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <ProfileCard justify='center' user={user}/>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>
          <Paws />
          <Paws />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paws />
          {user.trips.length > 0 ?
                <Trips user={user} trips={user.trips} userTripsOnly={true} selectTrip={selectTrip} changeLocation={changeLocation} selectedLocation={selectedLocation}/> :
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
          <Paws />
          <Paws />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Paws />
          {user.dogs.length > 0 ?
            <Row><br></br><Paws/>{user.dogs.map(dog => <Col><DogCard dog={dog} selectDog={selectDog}/></Col>)}<Paws/></Row> :
            <div>You have not created a profile for your dog(s)</div>
          }
          <br></br>
          <Row>
            <Col>
            <Link to="/createDogProfile"><Button variant='outline-info'> Create dog profile </Button></Link>
            </Col>
          </Row>
          <Paws />
          <Paws />
        </TabPanel>
        <div>
          <Row>
            <Col>
              {/* <img src='https://lh3.googleusercontent.com/proxy/7P6fJhGmAKdl3mXN4jF6pSbjCs6SlQh7ccsmIxfnaIATUkyFdt4S2d0EVIO02KrgnS-t5pEpb8Io8lAj131Gv6GRUYOja5M' /> */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
