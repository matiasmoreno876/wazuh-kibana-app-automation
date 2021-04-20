class LoginPage {

    constructor() {
    }

    visit() {
        cy.visit('/app/wazuh');
    }

    fillUsername(value) {
        const field = cy.get('input[data-test-subj="user-name"]', {timeout: 17000})
        field.clear()
            .type(value);

        return this;
    }

    fillPassword(value) {
        const field = cy.get('input[data-test-subj="password"]', {timeout: 17000})
        field.clear()
            .type(value);

        return this;
    }

    submit() {
        const button = cy.get('button[data-test-subj="submit"]', {timeout: 17000})
        button.click();

    }
}

export default LoginPage;