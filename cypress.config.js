
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://spotify.com/us/',
    supportFile: 'support/index.js',
    specPattern: 'test/*.cy.js',
    testIsolation: false,
    screenshotsFolder: 'output/screenshots',
    videosFolder: 'output/videos',
    downloadsFolder: 'output/downloads',
    viewportHeight: 980,
    viewportWidth: 1848,
  },
  reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochaJunitReporterReporterOptions: {
        mochaFile: 'output/mocha/junit_[hash].xml',
      },
      mochawesomeReporterOptions: {
        reportFilename: 'spec',
        reportDir: 'output/mocha',
        quite: true,
        timestamp: 'mmddyyyy_HHMMss',
        html: true,
        json: false,
      },
    },
})