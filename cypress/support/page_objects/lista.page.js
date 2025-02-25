class ProdutosPage {

    visitaUrl(){
        //ações do método
        cy.visit('produtos')
    }

}

export default new ProdutosPage()