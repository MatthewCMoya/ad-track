import AdJS from 'adjs';
import DFPNetwork from 'adjs/networks/DFP';
// import Debug from 'adjs/plugins/Debug';
import Logging from 'adjs/plugins/Logging';
import Sticky from 'adjs/plugins/Sticky';
import AutoRender from 'adjs/plugins/AutoRender';
import AutoRefresh from 'adjs/plugins/AutoRefresh';
import Responsive from 'adjs/plugins/Responsive';

const bucket = new AdJS.Bucket(DFPNetwork, {
  plugins: [
    AutoRender,
    AutoRefresh,
    // Debug,
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
    // autoRender: true,
    refreshRateInSeconds: 1000,
    // offset: -100,
    targeting: { example: 'false' },
  }
});

export default bucket;
