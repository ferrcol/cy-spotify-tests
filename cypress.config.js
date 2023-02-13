
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://spotify.com',
    supportFile: 'support/index.js',
    specPattern: 'test/*.cy.js'
  }
})