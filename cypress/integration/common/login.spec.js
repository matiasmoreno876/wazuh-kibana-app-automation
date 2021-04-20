import {Given} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../elements/pages/login/LoginPage";
import {USERNAME, PASSWORD} from "../elements/utils/const";

Given('The kibana admin user is logged in', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    const login = new LoginPage();
    login.visit();
    login
        .fillUsername(USERNAME)
        .fillPassword(PASSWORD)
        .submit();

    cy.wait(12000);
})