describe('Management - Decoders', () => {

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

    it('Should list decoders and show the pager', () => {
        cy.get('.eui > .euiFlexGroup')
            .click();
        cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
            .first()
            .click();
        cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
            .eq(1)
            .click();
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

    it('Should list custom decoders and show the pager', () => {
        cy.get('.eui > .euiFlexGroup')
            .click();
        cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
            .first()
            .click();
        cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
            .eq(1)
            .click();
        cy.wait(3000);
        cy.get('[class="euiButtonGroup euiButtonGroup--m"]')
            .click()
        cy.wait(3000);
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

    it('Should can edit a decoder', () => {
        cy.get('.eui > .euiFlexGroup')
            .click();
        cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]')
            .first()
            .click();
        cy.get('[class="euiSideNavItem euiSideNavItem--trunk"]')
            .eq(1)
            .click();
        cy.wait(3000);
        cy.get('[class="euiButtonGroup euiButtonGroup--m"]')
            .click()
        cy.wait(3000);
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
        cy.get('.euiCallOut')
            .should('exist')
            .should('be.visible');
        cy.get('.euiText > span')
            .should('have.text', 'Changes will not take effect until a restart is performed.')
        cy.get('.euiText--small > .euiFlexGroup > .euiFlexItem--flexGrowZero > .euiButton > .euiButtonContent')
            .should('exist')
            .should('be.visible');

    });

})