

describe('Home page functionalities', () => {
    it('Test 1', () => {

        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account'); // URL for Homepage of application Qafox.com

        cy.url().should('include',"https://tutorialsninja.com/demo/")//Assertion of the URL

        cy.get('[class="fa fa-home"]').click(); //Homepagebutton

        cy.get('[placeholder="Search"]').type('macbook{enter}'); // Enter \ existing Product name (macbook) into the Search text box field 

        cy.get('[title="MacBook"]').wait(3000).click(); // click on macbook to  see the deatils

        cy.get('[id="input-quantity"]').wait(2000).should('have.value','1')// //Adding qty for the product

        cy.get('[id="button-cart"]').wait(3000).click(); //product added to the cart

        cy.get('[class="alert alert-success alert-dismissible"]').click();  //alert for successfully adding product to the cart
        cy.on('window:alert',(message)=>{
            expect(message).to.equal('Success: You have added MacBook to your shopping cart!');
            return true;

        })
        
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=33"]').wait(3000).click();

        cy.get('[title="Nikon D300"]').click();

        cy.get('[id="input-quantity"]').should('have.value','1');

        cy.get('[id="button-cart"]').click();


        cy.get('[class="alert alert-success alert-dismissible"]').wait(2000).click();
        cy.on('window:alert',(message)=>{
            expect(message).to.equal('Success: You have added Nikon D300 to your shopping cart!').wait(1000).click();
            return true;

        })

       cy.get('[id="cart-total"]').click();

       cy.get('[title="Shopping Cart"]').click();

       cy.get('[id="checkout-cart"]').click();

       cy.get('[class="alert alert-danger alert-dismissible"]').wait(2000).click();
       cy.on('window:alert',(Alert)=>{
           expect(Alert).to.equal('Products marked with *** are not available in the desired quantity or not in stock!').wait(1000).click();
           return true;

       })
        

    });
});