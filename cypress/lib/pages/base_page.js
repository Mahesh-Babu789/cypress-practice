export default class Page {

  wait(milliSecs) {
      cy.wait(milliSecs);
      return this;
    }

    typeTextonDom(dom, text){
      cy.get(dom).type(text, { force: true });
      return this;
    }

    clickOnDomElement(dom) {
      cy.get(dom, { timeout: 20000 }).click();
      return this;  
    }
  
    clickOnDomElementContainsSpecificText(dom, text) {
      cy.get(dom, { timeout: 20000 }).contains(text).click();
      return this;
    }
  
    forceClickOnDomElement(dom) {
      cy.get(dom, { timeout: 20000 }).first().click({ force: true });
      return this;
    }
  
    forceClickOnDomElementWithFocused(dom) {
      cy.get(dom, { timeout: 20000 }).click({ force: true }).focused();
      return this;
    }
  
    forceClickOnDomElementContainsSpecificTestAndWait(dom, value) {
      cy.get(dom, { timeout: 10000 }).contains(value).click({ force: true });
      cy.wait(2500);
      return this;
    }
  
    clickOnDomElementLast(dom) {
      cy.get(dom).last().click();
      return this;
    }
  
    clickOnDomElementByXpath(dom) {
      cy.xpath(dom).click();
      return this;
    }
  
    clickOnDomElementByXpathFirst(dom) {
      cy.xpath(dom).first().click();
      return this;
    }
  
    clickOnDomElementFirst(dom) {
      cy.get(dom, { timeout: 10000 }).first().click();
      return this;
    }

  forceClickOnDomElementContainsSpecificText(dom, text) {
      cy.get(dom, { timeout: 20000 }).contains(text).click({ force: true });
      return this;
    }

    seesDomContainText( dom, text){
      cy.get(dom, { timeout: 20000 }).first().should('contain', text);
      return this;
    }    


  userLogin(username, password) {
      cy.get("input[name='username']").type(username);
      cy.get("input[name='password']").should('be.visible').type(password);
      cy.get('.orangehrm-login-button').should('be.visible').click();
      return this;
    }
  
    userLogout() {
      cy.get('.oxd-userdropdown-name').click({ force: true });
      this.forceClickOnDomElementContainsSpecificText('a', 'Logout');
      // this.wait(1000);
      cy.get(".orangehrm-login-slot h5:contains('Login')", { timeout: 10000 }).should('be.visible');
      return this;
    }

    closeBrowser() {
      cy.end();
      this.wait(1000);
      return this;
    } 
}
