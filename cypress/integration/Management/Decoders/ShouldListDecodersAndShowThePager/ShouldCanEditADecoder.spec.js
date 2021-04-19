import {Then, When} from "cypress-cucumber-preprocessor/steps";

When('The user presses the edit decoder button and edits it', () => {
    cy.get(':nth-child(3) > .euiButtonEmpty > .euiButtonContent')
        .should('exist')
        .should('be.visible')
        .click();
    cy.get('.euiTableCellContent > div > :nth-child(1) > .euiButtonIcon')
        .click();
    cy.get('.euiFlexItem--flexGrowZero > .euiButton > .euiButtonContent')
        .should('exist')
        .should('be.visible')
        .click();
});

Then('The user should see the message', () => {
    cy.get('.euiCallOut')
        .should('exist')
        .should('be.visible');
    cy.get('.euiText > span')
        .should('have.text', 'Changes will not take effect until a restart is performed.')
    cy.get('.euiText--small > .euiFlexGroup > .euiFlexItem--flexGrowZero > .euiButton > .euiButtonContent')
        .should('exist')
        .should('be.visible');
});