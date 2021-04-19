import {Given} from "cypress-cucumber-preprocessor/steps";

Given('The kibana admin user is logged in', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    cy.visit('/app/wazuh');
    cy.get('input[data-test-subj="user-name"]', {timeout: 17000}).type('admin');
    cy.get('input[data-test-subj="password"]', {timeout: 17000}).type('admin');
    cy.get('button[data-test-subj="submit"]', {timeout: 17000}).click();
    cy.wait(12000);
})