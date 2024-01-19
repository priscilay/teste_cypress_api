Cypress.Commands.add('testeGet', ()=>{
    cy.request({
        method: 'GET',
        url: '/1/actions/592f11060f95a3d3d46a987a',
        timeout: 1000,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      }).then(response =>{
        var name = response.body.data.list.name
        cy.log(name)
        expect(response.status).to.eq(200)
    })
})