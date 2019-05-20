import React, { useLayoutEffect, useRef } from 'react';
import bucket from './AdJsBucketSingleton';

const defaultOptions = {
  path: "/2620/nbcnews/homepage_2",
  sizes: {
    mobile: [[300, 250], [300, 600]],
    tablet: [[300, 250], [300, 600]],
    desktop: [[300, 250], [300, 600], [360, 360], [360, 720]],
    largeDesktop: [[300, 250], [300, 600], [360, 360], [360, 720]],
  },
  refreshOnBreakpoint: true,
  targeting: { age: 30, gender: 'female' },
}

const Ad = (props) => {
  const anchor = useRef(null);
  useLayoutEffect(() => { bucket.createAd(anchor.current, { ...defaultOptions, ...props.options }); });

  const styles = {
    background: `repeating-linear-gradient(45deg, white, black 10px, grey 30px)`,
    height: '2000px',
    position: 'absolute'
  };

  return <div style={styles} ref={anchor} />;
}

export default Ad;
