@demo
Feature: Validar a Home

    Eu como cliente das casas bahia
    Quero acessar a home e verificar as promoções disponíveis

    Background:
        Given que acesso a home
    Scenario Outline: Validar acesso a home
        Then devo visualizar a logo e ser direcionado para "<link>"
        And devo visualizar o campo de busca e exibir o "<label>"

        Examples:
            | link                  | label                       |
            | www.casasbahia.com.br | O que você está procurando? |

    Scenario: Realizar busca de produtos
        When insiro uma descrição no campo "O que vocé está procurando"
            | produto   |
            | geladeira |
        And clico na "lupa"
        Then devo ser direcionado para tela de busca de produtos