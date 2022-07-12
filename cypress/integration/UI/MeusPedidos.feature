@demo
Feature: Meus pedidos

    Eu como cliente das casas bahia
    Quero acesso os meus pedidos

    Scenario: Validar acesso aos meus pedidos
        Given que acesso a url "https://meuspedidos.casasbahia.com.br/"
        When realizo o login
        Then visualizo a pagina de meus pedidos