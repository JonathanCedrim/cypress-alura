describe('alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    })

    it('busca curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Java');
        cy.get('.header-barraBusca-form-submit').click();


    })
})