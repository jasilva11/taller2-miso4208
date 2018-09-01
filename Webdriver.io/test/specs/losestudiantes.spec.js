var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        if (browser.isVisible('button=Cerrar')) {
            browser.click('button=Cerrar');
        }
        browser.waitForVisible('button=Ingresar', 10000);
        browser.pause(3000);
        browser.click('button=Ingresar');
        browser.pause(3000);

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
});
describe('los estudiantes filter by class', function() {
    it('should visit los estudiantes and filter teachers reviews by class', function () {
        browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
        browser.pause(4000);    
        var classes = browser.element('div.jsx-3367902293');
        var checkbox = classes.element('input[name="id:ISIS3510"]');
        checkbox.click();
        browser.pause(4000);  

        var results = browser.element('div.jsx-3672521041');
        var count = results.elements('.jsx-1682178024 post').length
        browser.pause(4000); 
        expect(count).toBe(6);
    });
});
describe('los estudiantes visits a teachers profile', function() {
    it('Visits los estudiantes and enters to teachers porfile', function () {
        browser.url('https://losestudiantes.co');
        browser.pause(4000);  
        browser.click('button=Cerrar');
        browser.pause(4000); 
        browser.click('button=Alfabético');
        browser.pause(4000);    
        browser.click('div=Adolfo Jose Quiroz Salazar');

        browser.pause(4000); 
        var titulo = browser.element('.jsx-1339787052 nombreProfesor').getText();

        expect(titulo).toBe('Adolfo Jose Quiroz Salazar');
    });
});
