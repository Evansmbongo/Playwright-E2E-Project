class orderSummaryPage {
    constructor(page) {
        this.orderSummary = page.locator('.email-container')
    }
    async getOrderSummaryText() {
        return this.orderSummary.textContent()
    }
}
module.exports = { orderSummaryPage }