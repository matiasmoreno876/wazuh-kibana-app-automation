import {Then} from "cypress-cucumber-preprocessor/steps";

Then('The user should see the decoders', () => {
    cy.get('[class="euiTitle euiTitle--medium"]')
        .should('exist')
        .should('contain', 'Decoders');
    cy.get('[class="euiTableRow customRowClass euiTableRow-isClickable"]')
        .should('exist');
    cy.get('[data-test-subj="tablePaginationPopoverButton"]')
        .should('exist')
        .should('be.visible');
    cy.get('nav[class="euiPagination"]')
        .should('exist')
        .should('be.visible');
});