
describe('Logo for the application displayed on homepage', () => {
    it('Test logo', () => {


        cy.visit('https://tutorialsninja.com/demo/');

        cy.url().should('contain','tutorialsninja'); // url assertion

        cy.title().should('contain','Your Store');  // Assertion for title
        
        
        cy.xpath('//a[text()="Qafox.com"]').wait(1000).should('be.visible'); // assertion for Qfafox.com logo (logo exists)
        
    });
});