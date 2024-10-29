/// <reference types= "Cypress" />
import Screen from "./Selectors/Screen"

//const { logout } = require("./Selectors/Screen")

describe('Test Web Sauce Demo', () => {
  var myData  // variable global que guarda los datos obtenidos del archivo

  beforeEach('Conexión a Sauce Demo page', () => {
    cy.visit('/')
    cy.fixture('./data_login')  // conectar con el archivo
    .then(test =>{  // cuando llegan los datos
        myData = test // lo que llegó lo paso a mydata 
    })
  })
  it('Test de login correcto y logout', () => {
  
    myData.forEach((data)=>{//leo un renglon de los que existen en el archivo data_login.json
    //Ingresar usuario
    cy.typing(Screen.login.user, data.user)
    //Ingresar Pass
    cy.typing(Screen.login.password, data.password)
    //Pulsar login button
    cy.clicking(Screen.login.btn_ingresar)
    //Assertions
    //Contiene alguno o varios de esos caracteres
    cy.get(Screen.inicial.productsLbl).should('contain', 'Products')
    //Resultado exacto
    cy.validateText(Screen.inicial.productsLbl, Screen.inicial.ProductsText)
    //logout
    cy.get(Screen.logout.menu).click()
    cy.wait(2000)
    cy.get(Screen.logout.logout_btn).click()
  })
})

})


