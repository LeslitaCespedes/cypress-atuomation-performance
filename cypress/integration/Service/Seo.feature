@demo
Feature: SEO

    Eu como parceiro da casas bahia
    Quero validar a requisição com a rota Destaque

    Scenario Outline: Validar consulta por SKU
        Given que executo um GET em SEO, com o "<sku>"
        Then consulta será executada com sucesso "<status>"

        Examples:
            | sku      | status |
            | 55006494 | 200    |
            | 55003400 | 200    |
            | 12366343 | 200    |

