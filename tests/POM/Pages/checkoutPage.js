const { Module } = require("module")

class checkoutPage{
    constructor(page){
        this.page = page
        this.selectCountry = page.locator("input[placeholder = 'Select Country']")
        this.countryDrpDwn = page.locator(".ta-results")
        this.placeOrderBtn = page.locator('.btnn')
    }
    async country(country){
        await this.selectCountry.pressSequentially(country)
        await this.countryDrpDwn.waitFor()
        const dropDownCount = await this.countryDrpDwn.locator('button').count()
        // console.log(dropDownCount);

        for (let i = 0; i < dropDownCount; ++i) {
            if (await this.countryDrpDwn.locator('button').nth(i).textContent()===' Ghana') {
                await this.countryDrpDwn.locator('button').nth(i).click()
                break
            }
            
        }
    }

    async clickPlaceOrder(){
        await this.placeOrderBtn.click()
    }
}
module.exports = {checkoutPage}