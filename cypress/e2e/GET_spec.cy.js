/// <reference types="cypress" />
import '../service/GET.cy'

describe('Teste GET Cypress de API',() => {
    
    it('Retornar o nome de uma lista do response GET', ()=>{
        cy.testeGet()
    })
})