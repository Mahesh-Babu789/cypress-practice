import 'cypress-file-upload'

describe('File upload', () => {
    it('test file upload', () => {
        // "baseUrl": "https://opensource-demo.orangehrmlive.com/",
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Demo.gif');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })
})