

describe('Navigation for Qafox.com', () => {
    it('Test', () => {


        cy.visit('https://tutorialsninja.com/demo/');

        cy.xpath("//a[text()='Qafox.com']").wait(3000).click();

        cy.go('back').wait(2000);

        cy.go("forward");

        cy.reload()
        

        
    });
});