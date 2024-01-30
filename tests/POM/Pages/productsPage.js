class productsPage{
    constructor(page){
        this.cardBody = page.locator('.card-body')
        this.cartBtn = page.locator('[routerlink="/dashboard/cart"]')
        this.items = page.locator(".card-body b")
        this.checkoutBtn = page.locator('text ="Checkout"')
    }

    async searchProductAddToCart(itemName){
        await this.cardBody.first().waitFor()
        const countProducts = await this.cardBody.count()
        console.log(countProducts);

        for (let i = 0; i < countProducts; ++i) {
            if (await this.cardBody.nth(i).locator('b').textContent() === itemName) {
                 await this.cardBody.nth(i).locator("text = Add To Cart").click()
                 break
            }
        }
    }

    async navigateToCart(){
        await this.cartBtn.click()
    }

    async navigateToCheckout(){
        await this.checkoutBtn.click()
    }
}
module.exports = {productsPage}



