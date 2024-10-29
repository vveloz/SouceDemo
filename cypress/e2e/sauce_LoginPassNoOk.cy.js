/// <reference types= "Cypress" />
import Screen from "./Selectors/Screen"


describe('Test Web Sauce Demo', () => {
  var myDataIncorrecta  // variable global que guarda los datos obtenidos del archivo

  beforeEach('Conexión a Sauce Demo page', () => {
    cy.visit('/')
  })
  it('Test de login no correcto', () => {
    cy.fixture('./data_loginPassInc').then(renglon => {
    //myData.forEach((data)=>{//leo un renglon de los que existen en el archivo data_login.json
    //Ingresar usuario
    cy.typing(Screen.login.user, renglon.user)
    //Ingresar Pass
    cy.typing(Screen.login.password, renglon.password)
    //Pulsar login button
    cy.clicking(Screen.login.btn_ingresar)
    //Assertions
    //Resultado exacto mensaje error
    cy.validateText(Screen.login.error_selector, Screen.login.msg_error)
   
  })
})

})


