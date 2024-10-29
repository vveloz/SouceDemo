class screen {
    //selectores pantalla login
    login = {
        user:'#user-name',
        password:'#password',
        btn_ingresar:'#login-button',
        msg_locked:'',
        msg_no:'',
        msg_title:'Swag Labs',
        msg_error: 'Epic sadface: Username and password do not match any user in this service',
        error_selector: '#login_button_container > div > form > div.error-message-container.error > h3',
        error_blocked_user:'Epic sadface: Sorry, this user has been locked out.'
    }
    //selectores logout
    logout = {
        menu:'#react-burger-menu-btn',
        logout_btn:'#logout_sidebar_link'
    }
    //selectores pantalla productos
    products = {
        producto:'',
        carrito:''
    }
    //selectores pantalla inicial
    inicial = {
        productsLbl:'#header_container > div.header_secondary_container > span',
        AddToCartBtn:'#add-to-cart-sauce-labs-backpack',
        ProductsText: 'Products'
    }
    
}
//habilitar datos kpara los tests
module.exports = new screen ()