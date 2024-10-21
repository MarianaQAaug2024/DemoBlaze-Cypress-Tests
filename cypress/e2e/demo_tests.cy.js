describe('DemoBlaze E2E Tests', () => {

    it('повинен увійти в систему як користувач', () => {
     
      cy.visit('https://www.demoblaze.com');
  
      
      cy.get('#login2').click();
  
      
      cy.get('#logInModal', { timeout: 15000 }).should('have.class', 'show');
  
      
      cy.get('#loginusername').should('be.visible').type('MarianaKhrystina');
      cy.get('#loginpassword').should('be.visible').type('Mariana123');
  
     
      cy.get('button[onclick="logIn()"]').click();
  
    
      cy.contains('Welcome MarianaKhrystina', { timeout: 15000 }).should('be.visible');
    });
  
    it('повинен зареєструвати нового користувача', () => {
     
      cy.visit('https://www.demoblaze.com');
  
      
      cy.get('#signin2').click();
  
      
      cy.get('#signInModal', { timeout: 15000 }).should('have.class', 'show');
  
      
      cy.get('#sign-username').should('be.visible').type('NewUser' + Math.random());
      cy.get('#sign-password').should('be.visible').type('NewPassword123');
  
      
      cy.get('button[onclick="register()"]').click();
  
     
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Sign up successful.');
      });
    });
  
    it('повинен додати Samsung Galaxy s6 у кошик', () => {
      
      cy.visit('https://www.demoblaze.com');
  
     
      cy.contains('Samsung galaxy s6').click();
  
      
      cy.url().should('include', 'prod.html?idp_=1');
  
      
      cy.contains('Add to cart').click();
  
      
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Product added.');
      });
  
      // Переход до кошика
      cy.get('#cartur').click();
  
      // Перевірка, що товар знаходиться в кошику
      cy.contains('Samsung galaxy s6').should('be.visible');
    });
  
  });
  