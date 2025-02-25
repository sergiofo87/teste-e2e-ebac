/// <reference types="cypress"/>

import listaPage from "../support/page_objects/lista.page";

describe('Funcionalidade: Produtos', () => {
})
beforeEach(() => {
    produtosPage.visitarUrl()
});

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Teton Pullover Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve  visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain' , 'Aether Gym Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7    
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('XL' , 'Red' , qtd)

        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => { 
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain' , dados[1].nomeProduto)
        })
        

})