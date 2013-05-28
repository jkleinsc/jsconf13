var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Surviving the Offline Apocalypse<br>',
    subtitle: 'JSConf US 2013',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/curefav.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Inconsolata'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'John Kleinschmidt',
    company: 'Director of Technology Development<br/>CURE International',
    twitter: '@jkleinsc',
    www: 'http://cure.org',
    slides: 'http://jkleinsc.github.io/jsconf13',
    blog: 'http://resplendentdev.com'
  }]
};

