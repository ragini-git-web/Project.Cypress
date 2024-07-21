describe('login for the Qafox.com', () => {

    it('Implicite assertions', () => {

        cy.visit(' https://tutorialsninja.com/demo/ ');//Application URL

        cy.get('[title="My Account"]').click(); 

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();

        cy.get('#input-email').type('pandavraginic28@gmail.com');//Email id used when registration for login to the appplicaton
        cy.get('#input-email').should('have.value','pandavraginic28@gmail.com'); // Assertion for username field

        cy.get('#input-password').type('rpandav@1998');// Password 
        cy.get('#input-password').should('have.value','rpandav@1998'); // Assertion for password field

        cy.get('[value="Login"]').click();  
    });


});