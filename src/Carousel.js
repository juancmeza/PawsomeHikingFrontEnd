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
      <Button variant='outlined' color="#268397" onClick={() => setState({ open: true })}>See Slides</Button>
      <AutoRotatingCarousel
        label='Get started'
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: 'absolute' }}
      >
        <Slide
          media={<img src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2997&h=1499&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2019%2F07%2F12164029%2Fpetting-dog-getty-0719.jpg'/>}
          mediaBackgroundStyle={{ backgroundColor: "#268397" }}
          style={{ backgroundColor: "#268397" }}
          title='Dogs make us happier people.'
          subtitle='We should make them happy too.'
        />
        <Slide
          media={<img src='https://www.k9ofmine.com/wp-content/uploads/2016/02/dog-pulling-on-a-leash-1150x700.jpg'/>}
          mediaBackgroundStyle={{ backgroundColor: "#268397" }}
          style={{ backgroundColor: "#268397" }}
          title="A short walk doesn't cut it."
          subtitle="And you can't ever stay long enough at the park."
        />
        <Slide
          media={<img src='https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/04/dogsplayfb.jpg'/>}
          mediaBackgroundStyle={{ backgroundColor: "#268397" }}
          style={{ backgroundColor: "#268397" }}
          title="Too busy?"
          subtitle='Let us take your dog(s) on one of our hiking trips.'
        />
        <Slide
          media={<img src='https://www.greenmountainclub.org/wp-content/uploads/2019/08/ladder_AmyPotter.jpg'/>}
          mediaBackgroundStyle={{ backgroundColor: "#268397" }}
          style={{ backgroundColor: "#268397" }}
          title='Sign up!'
          subtitle='And learn more about our options and upcoming trips.'
        />
      </AutoRotatingCarousel>
    </div>
  )
}

