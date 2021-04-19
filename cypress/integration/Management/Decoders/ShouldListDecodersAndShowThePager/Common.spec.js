import {Given, When} from "cypress-cucumber-preprocessor/steps";

Given('The kibana admin user is logged in', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    cy.visit('http://192.168.100.6:5601/app/wazuh');
    cy.get('input[data-test-subj="user-name"]', {timeout: 17000}).type('admin');
    cy.get('input[data-test-subj="password"]', {timeout: 17000}).type('admin');
    cy.get('button[data-test-subj="submit"]', {timeout: 17000}).click();
    cy.wait(10000);
})

When('The user navigates to decoders', () => {
    cy.get('.eui > .euiFlexGroup')
        .click();
    cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
        .first()
        .click();
    cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
        .eq(1)
        .click();
    cy.wait(3000);
});