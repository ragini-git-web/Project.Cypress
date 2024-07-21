

describe('MouseHover Tests', () => {




    it('Test 1', () => {

        cy.visit('https://tutorialsninja.com/demo/');  

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]').should('not.be.visible') 
        // Dropdown is not visible before performing mousehover

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
         // MouseHover Action for the DeskTop Button

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]').should('be.visible')
        //Dropdown is visible after performing mousehover action
        
    });

    it('test 2', () => {

        cy.visit('https://tutorialsninja.com/demo/');


        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45"]').should('not.be.visible');
        // Dropdown is not visible before performing mousehover

        cy.get('.nav > :nth-child(2) > .dropdown-toggle').trigger('mouseover').click();
         // MouseHover Action for the Laptops & Notebooks Button
        
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45"]').should('be.visible')
        //Dropdown is visible after performing mousehover action

        cy.xpath("//a[contains(text(),'Show AllLaptops & Notebooks')]").click()
    });


    it('Test 3', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28"]').should('not.be.visible');
        // Dropdown is not visible before performing mousehover 

        cy.get(':nth-child(3) > .dropdown-toggle').trigger('mouseover').click();
        // MouseHover Action for the Components Button

    
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28"]').should('be.visible')
        //Dropdown is visible after performing mousehover action

    });

    it('Test 4', () => {

        
        cy.visit('https://tutorialsninja.com/demo/');


        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34_43"]').should('not.be.visible');
        // Dropdown is not visible before performing mousehover

        cy.get('[data-toggle="dropdown"][href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34"]')
        .trigger('mouseover').click();
        // MouseHover Action for the Mp3 Player Button

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34_43"]').should('be.visible');
        //Dropdown is visible after performing mousehover action







        
    });




















});