/// <reference types= "Cypress" />
import Screen from "./Selectors/Screen"

const { logout } = require("./Selectors/Screen")

describe('Test Web Sauce Demo', () => {
  var mydata  // variale global que guarda los datos obtenidos del archivo

  beforeEach('Conexión a Sauce Demo page', () => {
    cy.visit('/')
   
  })
  it('Test de login blocked user', () => {
    cy.fixture('./data_loginUserBlocked').then(renglon => {
    //cy.log(renglon.user) 
    //Ingresar usuario
    cy.typing(Screen.login.user, renglon.user)
    //Ingresar Pass
    cy.typing(Screen.login.password, renglon.password)
    //Pulsar login button
    cy.clicking(Screen.login.btn_ingresar)
    //Assertions
    //Resultado exacto mensaje error
    cy.validateText(Screen.login.error_selector, Screen.login.error_blocked_user)
  })
  })
})






