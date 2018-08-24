describe('Los estudiantes login fallido', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

describe('Los estudiantes login exitoso', function() {
    it('Visits los estudiantes and succeed at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ja.silva11@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaLogIn').contains('Ingresar').click()
    })
})

describe('Los estudiantes sign up fallido', function() {
    it('Visits los estudiantes and fails at sign up', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Jose")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Silva")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ja.silva11@uniandes.edu.co")
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Física")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').contains('Acepto los términos y condiciones y la política de privacidad.').click()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ocurrió un error activando tu cuenta')
    })
})

describe('Buscar profesor', function() {
    it('Visits los estudiantes and looks up a teacher', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('.Select-control').click()
      cy.get('.Select-input').find('input').type('Mario Linares',{force: true})
      cy.contains('Mario Linares Vasquez')
    })
})

describe('Entrar al perfil de un profesor', function() {
  it('Visits los estudiantes and enters to teachers porfile', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.contains('Alfabético').click()
    cy.contains('Adolfo Jose Quiroz Salazar').click()
    cy.contains('Adolfo Jose Quiroz Salazar')
    cy.contains('Universidad de los Andes')
  })
})


describe('Filtro por materia', function() {
  it('Visits los estudiantes and filter a teachers reviews by class', function() {
    cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
    cy.get('.jsx-3367902293').find('input[name="id:ISIS3510"]').click()
    cy.get('.jsx-3672521041').find('li[class="jsx-1682178024 post "]').should('have.length', 6)
  })
})
