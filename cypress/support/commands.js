
Cypress.Commands.add('typing', (selector, texto) => { 
    cy.get(selector).type(texto)
 })

 Cypress.Commands.add('clicking', (selector) => { 
    cy.get(selector).click()
 })
 Cypress.Commands.add('validateText', (selector, texto) => { 
   cy.get(selector).should('have.text', texto)
})