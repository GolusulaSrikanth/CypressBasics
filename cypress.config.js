const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 100000,
  reporter: 'mochawesome',
  projectId: '2cpwop',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    //specPattern: 'cypress/Integration/Cypress/*.js'
    //specPattern: 'cypress/Integration/Cypress/*.js'
    //specPattern: 'cypress/Integration/Example2/*.js'
    //specPattern:'cypress/Integration/Example/*.js'
    // specPattern: 'cypress/Integration/Automation Demo Site/*.js'
    //specPattern: 'cypress/Integration/Example/BDD/*.feature'
    //specPattern: 'cypress/Integration/Example/BDD/Flipkart.feature'
   specPattern: 'cypress/Integration/Example/BDD/InternetExample.feature'
  },
});
