import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row} from '@mui-treasury/components/flex';
import { Info } from '@mui-treasury/components/info';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const getPicture = (tripLocation) => {
  switch(tripLocation){
    case 'Fort Funston':
      return 'http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg'
    case 'Stern Grove':
      return 'https://i.pinimg.com/originals/89/94/ea/8994eaf9b1f80e21c9f44e544998f714.jpg'
    case "Marshall's Beach":
      return 'https://ucarecdn.com/067bb93b-221c-4d23-ae61-26ba7ced96fb/-/resize/1000x/-/format/auto/-/progressive/yes/-/quality/lightest/'
    case "Lands End":
      return 'https://greatruns.com/wp-content/uploads/2016/11/SanFran3.jpg' 
    default:
      return 'http://www.san-francisco-travel-secrets.com/images/fort-funston-beach-and-dogs.jpg'

  }
}

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 280,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1rem',
      // backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      // background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },

  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#80b5c1',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    background: 'linear-gradient(to top, #032733, #416e7c)',

  },
  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

export const LocationCard = React.memo(function LocationCard({location}) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} />
      </NoSsr>
      <Card className={styles.card}>
        <Box className={styles.main} minHeight={350} position={'relative'}>
          <CardMedia
            classes={mediaStyles}
            image={
              getPicture(location)
            }
          />
        </Box>
        <Row
          className={styles.author}
          m={0}
          p={3}
          pt={2}
          gap={2}
          bgcolor={'common.white'}
        >
          <Info position={'middle'} variant={'h2'} className={styles.title}>
            <Typography position={'middle'} variant={'h6'}>{location}</Typography>
          </Info>
        </Row>
        <div className={styles.shadow} />
        <div className={`${styles.shadow} ${styles.shadow2}`} />
      </Card>
    </>
  );
});
export default LocationCard