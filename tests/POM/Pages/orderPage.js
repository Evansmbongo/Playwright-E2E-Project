const { log } = require("console");

class orderPage{
    constructor(page){
        this.page = page
        this.ordersHeader = page.locator("h1[class='ng-star-inserted']")
        this.orderIdTableRow = page.locator('tbody tr')
    }

    async getOrdersHeader(page) {
        // await page.waitForLoadState('domcontentloaded')
        return this.ordersHeader.textContent();
    }

    async searchAndClickOrderView(orderId){
        await this.orderIdTableRow.first().waitFor();
        const orderRowCount = await this.orderIdTableRow.count()
        for (let i = 0; i < orderRowCount; ++i) {
            const rowOrderId = await this.orderIdTableRow.nth(i).locator('th').textContent()
            console.log(rowOrderId);
            if (orderId.includes(rowOrderId)) {
                await this.orderIdTableRow.nth(i).locator('.btn-primary').click()
                break
            }
        }
    }
}
module.exports = {orderPage}