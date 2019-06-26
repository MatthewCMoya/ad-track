/*
  in markup
  
  <div data-ad-slot></div>
  <div data-ad-slot="banner"></div>
  <div data-ad-slot="sidebar"></div>

  Using values for ad-slot can allow you to customize overrides
  per ad type
*/

const script = document.createElement('script');
script.src = 'https://unpkg.com/adjs@latest/umd/bundle.development.js';
script.async = true;
script.defer = true;
script.onload = () => {
  const { DFP } = window._ADJS.Networks;
  const { AutoRender, AutoRefresh, Responsive, DeveloperTools, Sticky } = window[`_ADJS`].Plugins;

  const adContainers = document.querySelectorAll('[data-ad-slot]');

  const page = new window.AdJS.Page(DFP, {
    plugins: [AutoRender, AutoRefresh, DeveloperTools, Responsive],
    defaults: {
      breakpoints: {
        mobile: { from: 0, to: 767 },
        tablet: { from: 768, to: 1039 },
        desktop: { from: 1040, to: 1359 },
        largeDesktop: { from: 1360, to: Infinity },
      },
      autoRender: true,
      refreshRateInSeconds: 5000,
    },
  });

  Array.prototype.forEach.call(adContainers, elm => {
    /*
      this is where you can check for values in the ad-slot
      const { adType } = elm.dataset;
      page.createAd(elm, yourConfigurationFile.overrides[adType]);
    */

    page.createAd(elm, {
      path: '/123456/sports',
      plugins: [Sticky],
      sizes: {
        mobile: [],
        tablet: [],
        desktop: [[300, 250], [300, 600]],
        largeDesktop: [[300, 250], [300, 600]],
      },
    });
  });
}

document.head.appendChild(script);
