import {Given, When} from "cypress-cucumber-preprocessor/steps";

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