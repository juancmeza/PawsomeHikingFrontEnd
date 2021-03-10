import React from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

// const Slide = require('./Slide').default;
const { grey, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

export default function Carousel() {

  const [state, setState] = React.useState({
    open: true,
  });

  return( 

    <div style={{ position: 'relative', width: '100%', height: 500 }}>
      <Button onClick={() => setState({ open: true })}>See Slides</Button>
      <AutoRotatingCarousel
        label='Get started'
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: 'absolute' }}
      >
        <Slide
          media={<img src='https://i.pinimg.com/originals/89/94/ea/8994eaf9b1f80e21c9f44e544998f714.jpg'/>}
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title='This is a very cool feature'
          subtitle='Just using this will blow your mind.'
        />
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
          mediaBackgroundStyle={{ backgroundColor: blue[100] }}
          style={{ backgroundColor: blue[600] }}
          title='Ever wanted to be popular?'
          subtitle='Well just mix two colors and your are good to go!'
        />
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
          mediaBackgroundStyle={{ backgroundColor: "#69DFFB" }}
          style={{ backgroundColor: grey[900] }}
          title='May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
      </AutoRotatingCarousel>
    </div>
  )
}
