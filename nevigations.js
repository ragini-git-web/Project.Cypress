

describe('Navigation for Qafox.com', () => {
    it('Test', () => {


        cy.visit('https://tutorialsninja.com/demo/');  // URL for the Apllication 

        cy.title().should('eq','Your Store'); // Home page of the application

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=24"]').click()

        cy.get(':nth-child(6) > a').should('have.text','Phones & PDAs').wait(1000) // Asserting the phones & PDA's

        cy.go('back').wait(2000); // cy.go commandgo back to the previous page i.e. homepage

        cy.go('forward').wait(2000); // this will agin go the page Phones & PDAs

        cy.reload(); // reloading the page

    });

        it('Test 2', () => {

        cy.visit('https://tutorialsninja.com/demo/'); 
            
        cy.get('[title="Shopping Cart"]').click().wait(1000);

        cy.go('back').wait(2000);

        cy.go("forward");

        cy.reload()
        


            
    
        
    });
});