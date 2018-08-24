module.exports = { // adapted from: https://git.io/vodU0
    'Los estudiantes login failed': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
        .setValue('.cajaLogIn input[name="password"]', '1234')
        .click('.cajaLogIn .logInButton')
        .waitForElementVisible('.aviso.alert.alert-danger', 4000)
        .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
        .end();
    },
    'Los estudiantes login suceeded': function(browser) {
     browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaLogIn input[name="correo"]', 'ja.silva11@uniandes.edu.co')
        .setValue('.cajaLogIn input[name="password"]', '12345678')
        .click('.cajaLogIn .logInButton')
        .waitForElementVisible('button[id=cuenta]', 4000)
        .end();
    },
    'Los estudiantes signup failed': function(browser) {
    browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaSignUp input[name="nombre"]', 'Jose')
        .setValue('.cajaSignUp input[name="apellido"]', 'Silva')
        .setValue('.cajaSignUp input[name="correo"]', 'ja.silva11@uniandes.edu.co')
        .setValue('.cajaSignUp input[name="password"]', '12345678')
        .click('select[name="idPrograma"] option[value="37"]')
        .click('.cajaSignUp input[name="acepta"]')
        .click('.cajaSignUp .logInButton')
        .waitForElementVisible('.sweet-alert ', 4000)
        .assert.containsText('.sweet-alert ', 'Ocurrió un error activando tu cuenta')
        .end();
    },
    'Los estudiantes look up teacher': function(browser) {
    browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .click('.Select-control')
        .setValue('.Select-input input','Mario Linares')
        .waitForElementVisible('.Select-menu-outer', 4000)
        .pause(4000)
        .assert.containsText('.Select-menu-outer', 'Mario Linares Vasquez')
        .end();
    }
  };