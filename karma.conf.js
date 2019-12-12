const Path = require( "path" );

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

    browsers: ["ChromeHeadless"],

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