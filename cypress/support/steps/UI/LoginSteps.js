/* global Given, Then, When */
/// <reference types="Cypress" />

import CommonPage from '../../pages/CommonPage'
import LoginPage from '../../pages/LoginPage'

When("quando clico em Entre ou Cadastre-se", () => {
    CommonPage.clickInMenuLogin()
})

Then("devo visualizar a tela login", () => {
    LoginPage.validateLogin()
})

Then("insiro o CPF ou CNPJ", () => {
    cy.fixture("user").then((data) => {
        LoginPage.fillFieldUsername(data.cpf)
    })
})

And("clico no botão {string}", (text) => {
    switch (text) {
        case "Continuar":
            LoginPage.clickInButtonContinueLogin()
            break;
        case "Entrar":
            LoginPage.clickInButtonLogin()
            break;
        default:
            break;
    }
})

Then("insiro a senha de acesso", () => {
    LoginPage.fillFieldPassword(Cypress.env('password'))
})