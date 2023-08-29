import BasePage from '../../lib/pages/base_page'

const basePage = new BasePage();

beforeEach(() => {    
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.wait(4000);
});

afterEach(() => {
    basePage.closeBrowser();
})

describe('Login page validation', () => {

    it('login in to the application with valid user details', () => {
        basePage.userLogin(Cypress.env('userName'), Cypress.env('password'))
        basePage.userLogout();
    });

    it('login in to the application with invalid user details', () => {
        basePage.userLogin(Cypress.env('incorrectUserName'), Cypress.env('incorrectPassword'))
        cy.get('p.oxd-alert-content-text').contains('Invalid credentials')
    });

    it('login in to the application with valid user name and invlid password', () => {
        basePage.userLogin(Cypress.env('userName'), Cypress.env('incorrectPassword'))
        cy.get('p.oxd-alert-content-text').contains('Invalid credentials')
    });

    it('login in to the application with invalid user name and valid password  details', () => {
        basePage.userLogin(Cypress.env('incorrectUserName'), Cypress.env('password'))
        cy.get('p.oxd-alert-content-text').contains('Invalid credentials')
    });    
})