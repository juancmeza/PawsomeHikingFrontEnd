import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 900,
    marginLeft: 'auto',
    overflow: 'initial',
    background: 'linear-gradient(#032733, #416e7c)',
    color: '#80b5c1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 14,
  },
  cta: {
    marginTop: 14,
    textTransform: 'initial',
  },

  buttonStyles: {
    background: '#032733',
  }
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://askforadventure.com/wp-content/uploads/2020/08/dogs-4-1536x1024.jpg.webp'
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          heading={'PAWsome Hiking'}
          heading={
            'We provide your pup with more than just a walk. Wether you are going out of town and need boarding for your pup or you just need them to get that essential play time, you can be sure your pup will get plenty of time off the leash in a safe environment.' 
          }
        />
        <Button className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo