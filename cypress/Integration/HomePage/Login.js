describe('login for the Qafox.com', () => {

    it('Login', () => {

        cy.visit(' https://tutorialsninja.com/demo/ ');
        cy.get('[title="My Account"]').click();
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
        cy.get('#input-email').type('pandavraginic28@gmail.com');
        cy.get('#input-password').type('rpandav@1998');
        cy.get('[value="Login"]').click();  
    });
});