import {Given, When} from "cypress-cucumber-preprocessor/steps";

When('The user navigates to rules', () => {
    cy.get('.eui > .euiFlexGroup')
        .click();
    cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
        .first()
        .click();
    cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
        .first()
        .click();
});