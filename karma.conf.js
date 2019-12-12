const Path = require( "path" );
const os = require('os');
const chromeHeadlessSupported = os.platform() !== 'win32' || Number((os.release().match(/^(\d+)/) || ['0', '0'])[1]) >= 10;

module.exports = function( config ) {
  config.set( {
    frameworks: [
      "mocha", "sinon", "should"
    ],

    files: [
      // tests
      { pattern: "test/**/*.mjs", type: "module" },
      // files tests rely on
      { pattern: "src/**/*.mjs", type: "module", included: false },
    ],

    reporters: ["coverage-istanbul" ],

    browsers: [
      chromeHeadlessSupported ? 'ChromeHeadless' : 'Chrome'
    ],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    },

    singleRun: true,

    preprocessors: {
      "**/!(*.test).mjs": ["karma-coverage-istanbul-instrumenter"]
    },

    coverageIstanbulInstrumenter: {
      esModules: true
    },

    coverageIstanbulReporter: {
      reports: [ "lcov", "html", "text" ],
      dir: Path.join( __dirname, "coverage" ),
    },
  } );
};