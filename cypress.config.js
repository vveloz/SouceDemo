const { defineConfig } = require("Cypress");
module.exports = {
  // ...rest of the Cypress project config
  projectId: "nkwgne",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.saucedemo.com'
  },
  
};
//module.exports = defineConfig({
//e2e: {
//setupNodeEvents(on, config) {
// implement node event listeners here
//},
//},

//});
