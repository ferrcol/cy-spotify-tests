
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://spotify.com',
    supportFile: 'support/index.js',
    specPattern: 'test/*.cy.js',
    testIsolation: false
  },
  reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/mocha/junit_[hash].xml',
      },
      mochawesomeReporterOptions: {
        reportFilename: 'spec',
        reportDir: 'cypress/mocha',
        quite: true,
        timestamp: 'mmddyyyy_HHMMss',
        html: true,
        json: false,
      },
    },
})