/* global Given, Then, When */
/// <reference types="Cypress" />

import MeusPedidosPage from '../../pages/MeusPedidosPage'

Then("visualizo a pagina de meus pedidos", () => {
    MeusPedidosPage.validatePage()
})