const { AutoRender, AutoRefresh, Responsive, DeveloperTools, Sticky } = window[`_ADJS`].Plugins;

const paths = [
  '/3833/motortrend.primedia.com/928969',
  '/2620/nbcnews/homepage_2',
];

export const defaults = {
  bucket: {
      plugins: [AutoRender, AutoRefresh, DeveloperTools, Responsive],
      defaults: {
          breakpoints: {
              mobile: { from: 0, to: 767 },
              tablet: { from: 768, to: 1039 },
              desktop: { from: 1040, to: 1359 },
              largeDesktop: { from: 1360, to: Infinity },
          },
          offset: -100,
          refreshOnBreakpoint: true,
          autoRender: true,
          refreshRateInSeconds: 1000,
          targeting: { example: 'true' },
      },
  },
  ad: {
      path: paths[0],
      sizes: {
          mobile: [[300, 250], [300, 600]],
          tablet: [[300, 250], [300, 600]],
          desktop: [[300, 250], [300, 600]],
          largeDesktop: [[300, 250], [300, 600]],
      },
  },
};

export const overrides = {
  banner: {
      path: paths[1],
      sizes: {
          mobile: [[300, 100], [300, 250]],
          tablet: [[600, 250]],
          desktop: [[468, 60], [728, 90]],
          largeDesktop: [[468, 60], [728, 90]],
      },
  },
  sidebar: {
      plugins: [Sticky],
      sizes: {
          mobile: [],
          tablet: [],
          desktop: [[250, 250], [300, 250], [300, 300]],
          largeDesktop: [[300, 250], [300, 600]],
      },
  },
};