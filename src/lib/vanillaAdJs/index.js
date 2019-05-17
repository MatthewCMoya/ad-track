import AdJS from 'adjs';
import DFPNetwork from 'adjs/networks/DFP';
import Debug from 'adjs/plugins/Debug';
import Logging from 'adjs/plugins/Logging';
import Sticky from 'adjs/plugins/Sticky';
import AutoRender from 'adjs/plugins/AutoRender';
import AutoRefresh from 'adjs/plugins/AutoRefresh';
import Responsive from 'adjs/plugins/Responsive';

const bucket = new AdJS.Bucket(DFPNetwork, {
  plugins: [
    AutoRender,
    AutoRefresh,
    Debug,
    Logging,
    Responsive,
    Sticky,
  ],
  defaults: {
    breakpoints: {
      mobile: { from: 0, to: 767 },
      tablet: { from: 768, to: 991 },
      desktop: { from: 992, to: 1199 },
      largeDesktop: { from: 1200, to: Infinity },
    },
    refreshOnBreakpoint: true,
    autoRender: true,
    refreshRateInSeconds: 1000,
    offset: -100,
    targeting: { example: 'false' },
  }
});

const defaultAdOptions =  {
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

const createAd = (targetElement, options = null) => {
  bucket.createAd(targetElement, { ...defaultAdOptions, ...options }); 
}

// Usage:
const elm = document.getElementById('my-ad-target-1');
createAd(elm, {})

export default createAd;
