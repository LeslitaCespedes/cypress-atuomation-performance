@demo
Feature: Destaque

    Eu como parceiro da casas bahia
    Quero validar a requisição com a rota Destaque

    Scenario: Validar busca Sku por lojista
        Given que executo um requisição com o metodo GET, utilizando os seguintes parametros
            | sku      | lojista |
            | 55006494 | 10037   |
        Then a consulta sera executada com sucesso