@demo
Feature: Login

    Eu como cliente das casas bahia
    Quero realizar o login

    Background: Home
        Given que acesso a home
        When quando clico em Entre ou Cadastre-se

    Scenario: Validar acesso a tela de login
        Then devo visualizar a tela login

    Scenario: Realizar login
        Then insiro o CPF ou CNPJ
        And clico no botão "Continuar"
        And insiro a senha de acesso
        And clico no botão "Entrar"
