describe('Management - Ruleset', () => {
    it('should list rule', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('http://localhost:5601/app/home#/');
        cy.get('input[data-test-subj="user-name"]', {timeout:17000}).type('admin');
        cy.get('input[data-test-subj="password"]', {timeout:17000}).type('admin');
        cy.get('button[data-test-subj="submit"]', {timeout:17000}).click();
    });

})