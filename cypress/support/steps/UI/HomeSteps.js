/* global Given, When, Then */
/// <reference types="Cypress" />

import CommonPage from '../../pages/CommonPage'
import HomePage from '../../pages/HomePage'

let termoBusca

Given("que acesso a home", () => {
    cy.navigate('/')
})

When("insiro uma descrição no campo {string}", (value, table) => {
    let produto = table.rows()[0]
    termoBusca = produto.toString()

    HomePage.fillSearch(termoBusca)
})

And("clico na {string}", (value) => {
    HomePage.clickInButtonSearch()
})

Then("devo ser direcionado para tela de busca de produtos", () => {
    CommonPage.validateTitleInPage(termoBusca)
    CommonPage.beShowSomeProduct()
})

Then('devo visualizar a logo e ser direcionado para {string}', (link) => {
    HomePage.validateLogo(link)
})

And("devo visualizar o campo de busca e exibir o {string}", (label) => {
    HomePage.validateInputSearch(label)
})