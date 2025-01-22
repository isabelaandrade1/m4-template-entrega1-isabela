# CRUD de Produto

## Descrição do Projeto

Este projeto consiste na implementação de um CRUD (Create, Read, Update, Delete) de produtos, utilizando TypeScript e programação orientada a objetos (POO). A metodologia de desenvolvimento adotada é o Test Driven Development (TDD), com testes prontos para validação.

### Funcionalidades Principais

1. **Tipos e Interfaces:**
   - Criação de uma interface `Product` em `interfaces.ts` para descrever os atributos de um produto.
   - Implementação de uma interface que serve como referência para a classe a ser criada, contendo métodos como `createProduct`, `getProducts`, `getOneProduct`, `updateProduct` e `deleteProduct`.

2. **Classe ProductList:**
   - Desenvolvimento da classe `ProductList` para encapsular a lógica do CRUD.
   - Utilização de variáveis privadas para armazenar a lista de produtos e um identificador numérico.
   
3. **Métodos CRUD:**
   - **createProduct:**
     - Adição de um produto à lista, utilizando o id, name, price e as datas de criação e atualização.
     - Retorno do produto adicionado.

   - **getProducts:**
     - Retorno da lista completa de produtos.

   - **getOneProduct:**
     - Retorno de um produto específico com base no id fornecido.

   - **updateProduct:**
     - Atualização de um produto com base no id e nos dados fornecidos.
     - Substituição das chaves que vierem no parâmetro data.
     - Retorno do produto atualizado.

   - **deleteProduct:**
     - Exclusão de um produto com base no id.
     - Retorno de um objeto indicando o sucesso da exclusão.
