import Decoders from "./Decoders";

class WzMenu {

    constructor() {
        this.decoders = new Decoders();
    }

    getListButtons() {
        return cy.get('.eui > .euiFlexGroup');
    }

    getManagementButton() {
        return cy.get('[class="euiButtonEmpty euiButtonEmpty--text wz-menu-button "]').first();
    }

    goToDecoders() {
        this.getListButtons()
            .click();
        this.getManagementButton()
            .click()
        const button = this.decoders.getDecodersButton();
        button.click();
    }

    getDecoders() {
        return this.decoders;
    }

}

export default WzMenu;