/* global Given, Then, When */
/// <reference types="cypress" />

let response

Given("que executo um requisição com o metodo GET, utilizando os seguintes parametros", (table) => {
    var matrix = table.hashes();
    let sku
    let lojista

    for (let i = 0; i < matrix.length; i++) {
        sku = matrix[i].sku
        lojista = matrix[i].lojista
    }

    cy.request({
        method: 'GET',
        url: `https://api-destaque-descoberta.casasbahia.com.br/Destaque/Sku/${sku}/Lojista/${lojista}`
    }).then(($res) => {
        response = $res
    })
})

Then("a consulta sera executada com sucesso", () => {
    expect(response.status).to.equal(200);
    expect(response.body).to.be.not.empty
})