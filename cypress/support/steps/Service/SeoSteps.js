/* global Given, Then, When */
/// <reference types="cypress" />

let response

Given("que executo um GET em SEO, com o {string}", (sku) => {
    cy.request({
        method: 'GET',
        url: `https://pdp-api.casasbahia.com.br/api/v2/seo/custom_links/CB/filter/${sku}`
    }).then(($res) => {
        response = $res
    })
})

Then("consulta será executada com sucesso {string}", (status) => {
    expect(response.status).to.equal(parseInt(status));
})