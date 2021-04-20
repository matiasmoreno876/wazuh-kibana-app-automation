class Decoders {

    constructor() {
        this.titleSelector = '[class="euiTitle euiTitle--medium"]';
        this.decodersButtonSelector = '[class="euiSideNavItem euiSideNavItem--trunk"]';
        this.tableSelector = '[class="euiTableRow customRowClass euiTableRow-isClickable"]';
        this.dropdownPaginationSelector = '[data-test-subj="tablePaginationPopoverButton"]';
        this.listPages = 'nav[class="euiPagination"]';
        this.customDecodersButtonSelector = '[class="euiButtonGroup euiButtonGroup--m"]';
        this.manageDecodersFilesButtonSelector = ':nth-child(3) > .euiButtonEmpty > .euiButtonContent';
        this.editDecoderButtonSelector = '.euiTableCellContent > div > :nth-child(1) > .euiButtonIcon';
        this.saveDecoderButtonSelector = '.euiFlexItem--flexGrowZero > .euiButton > .euiButtonContent';
        this.messageConfirmSaveSelector = '.euiText > span';
        this.buttonRestartSelector = '.euiText--small > .euiFlexGroup > .euiFlexItem--flexGrowZero > .euiButton > .euiButtonContent';
    }

    getObject(selector) {
        return cy.get(selector);
    }

    getDecodersButton() {
        return this.getObject(this.decodersButtonSelector)
            .eq(1);
    }

    getTittle() {
        return this.getObject(this.titleSelector);
    }

    getTable() {
        return this.getObject(this.tableSelector);
    }

    getTablePaginationDropdowns() {
        return this.getObject(this.dropdownPaginationSelector);
    }

    getTablePaginationListPages() {
        return this.getObject(this.listPages);
    }

    getCustomDecodersButton() {
        return this.getObject(this.customDecodersButtonSelector);
    }

    getManageDecodersFilesButton() {
        return this.getObject(this.manageDecodersFilesButtonSelector);
    }

    getEditDecoderButton() {
        return this.getObject(this.editDecoderButtonSelector);
    }

    getSaveDecoderButton() {
        return this.getObject(this.saveDecoderButtonSelector);
    }

    getMessageConfirmSave() {
        return this.getObject(this.messageConfirmSaveSelector);
    }

    getButtonRestart() {
        return this.getObject(this.buttonRestartSelector);
    }

}

export default Decoders;