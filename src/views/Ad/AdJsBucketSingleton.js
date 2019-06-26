import AdJS from 'adjs';
import DFPNetwork from 'adjs/Networks/DFP';
import DeveloperTools from 'adjs/Plugins/DeveloperTools';
import Sticky from 'adjs/Plugins/Sticky';
import AutoRender from 'adjs/Plugins/AutoRender';
import AutoRefresh from 'adjs/Plugins/AutoRefresh';
import Responsive from 'adjs/Plugins/Responsive';

const bucket = new AdJS.Bucket(DFPNetwork, {
  plugins: [
    AutoRender,
    AutoRefresh,
    DeveloperTools,
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

export default bucket;
