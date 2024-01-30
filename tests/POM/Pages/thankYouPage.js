class thankYouPage{
    constructor(page){
        this.orders = page.locator("button[routerlink*='/dashboard/myorders']")
        this.thankYou = page.locator('.hero-primary')
        this.orderId = page.locator("label[class='ng-star-inserted']")
    }

    async getOrderId(){
        return this.orderId.textContent()
    }

    async clickOrders(){
        await this.orders.click()
    }
}
module.exports = {thankYouPage}