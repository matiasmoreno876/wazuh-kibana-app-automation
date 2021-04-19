import {Then, When} from "cypress-cucumber-preprocessor/steps";

When('The user press button custom decoders', () => {
    cy.wait(3000);
    cy.get('[class="euiButtonGroup euiButtonGroup--m"]')
        .click()
    cy.wait(3000);
});

Then('The user should see the custom decoders', () => {
    cy.get('[class="euiTitle euiTitle--medium"]')
        .should('exist')
        .should('contain', 'Decoders');
    cy.get('[class="euiTableRow customRowClass euiTableRow-isClickable"]')
        .should('exist')
        .should('be.visible');
    cy.get('[data-test-subj="tablePaginationPopoverButton"]')
        .should('exist')
        .should('be.visible');
    cy.get('nav[class="euiPagination"]')
        .should('exist')
        .should('be.visible');
});