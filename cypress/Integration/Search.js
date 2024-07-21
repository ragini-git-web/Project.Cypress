


describe('Search functionality for homepage of application', () => {
    it('dropdown for search', () => {


        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search'); //URL for search functionality

        cy.url().should('contain','tutorialsninja') //positive Assertions for search URL
        .and('not.contain','Qafox.com');  // negative Assertions for search URL

        cy.title().should('include','Search'); // Assertion for title of the search page

        cy.get('#input-search').click(); // Dropdown without select 

        cy.get('[class="form-control input-lg"]').type('macbook{enter}'); // type macbook in the search section and press enter

        cy.get('[name="category_id"]').select('All Categories').should('have.value','0');  // Dropdown with select class

        cy.get('[id="description"]').check().should('be.visible').and('be.checked'); // Check the box 'Search in product descriptions'

        cy.get('[id="button-search"]').click()

      








        












        
    });
});