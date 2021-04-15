describe('Management - Rules', () => {

    beforeEach(() => {
        cy.visit('http://192.168.100.6:5601/app/wazuh');
        cy.get('input[data-test-subj="user-name"]', {timeout: 17000}).type('admin');
        cy.get('input[data-test-subj="password"]', {timeout: 17000}).type('admin');
        cy.get('button[data-test-subj="submit"]', {timeout: 17000}).click();
        cy.wait(10000);
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Should list rule and show the pager', () => {
        cy.get('.eui > .euiFlexGroup')
            .click();
        cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
            .first()
            .click();
        cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
            .first()
            .click();
        cy.get('[class="euiTitle euiTitle--medium"]')
            .should('exist')
            .should('contain', 'Rules');
        cy.get('[class="euiTableRow customRowClass euiTableRow-isClickable"]')
            .should('exist');
        cy.get('[data-test-subj="tablePaginationPopoverButton"]')
            .should('exist')
            .should('be.visible');
        cy.get('nav[class="euiPagination"]')
            .should('exist')
            .should('be.visible');
    });

    it('Should list custom rules and show the pager', () => {
        cy.get('.eui > .euiFlexGroup')
            .click();
        cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
            .first()
            .click();
        cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
            .first()
            .click();
        cy.wait(3000);
        cy.get('[class="euiButtonGroup euiButtonGroup--m"]')
            .click()
        cy.wait(3000);
        cy.get('[class="euiTitle euiTitle--medium"]')
            .should('exist')
            .should('contain', 'Rules');
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

})