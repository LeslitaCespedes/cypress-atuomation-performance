/* global Given, Then, When */
/// <reference types="Cypress" />

import LoginPage from '../../pages/LoginPage'
import user from '../../../fixtures/user.json'

Given("que acesso a url {string}", (url) => {
    cy.navigate(url)
})

Given("realizo o login", () => {
    LoginPage.fastLogin(user.cpf, Cypress.env('password'))
})