/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('minha conta')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.get('#username').type('sergio.teste@teste.com')
      cy.get('#password').type('teste@123')
      cy.get('.woocommerce-form > .button').click()

      cy.visit('produtos')
      
      cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
      cy.get('.button-variable-item-XL').click()
      cy.get('.button-variable-item-Black').click()
      cy.get('.input-text').clear().type('2')
      cy.get('.single_add_to_cart_button').click()

      cy.visit('produtos')

      cy.get('.post-3374 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
      cy.get('.button-variable-item-36').click()
      cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
      cy.get('.input-text').clear().type('3')
      cy.get('.single_add_to_cart_button').click()

      cy.visit('produtos')

      cy.get('.post-3964 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Purple').click()
      cy.get('.input-text').clear().type('8')
      cy.get('.single_add_to_cart_button').click()

      cy.visit('produtos')

      cy.get(':nth-child(2) > .page-numbers').click()
      cy.get('.post-3850 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear().type('2')
      cy.get('.single_add_to_cart_button').click()

      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      cy.get('#billing_address_1').clear().type('Rua João da Silva, 12')
      cy.get('#billing_city').clear().type('Osasco')
      cy.get('#billing_postcode').clear().type('06023123')
      cy.get('#billing_phone').clear().type('11123456789')
      cy.get('#payment_method_cod').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido')
  });


})