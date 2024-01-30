const {test, expect} = require('@playwright/test')
const { loginPage } = require('../Pages/loginPage'); 
const { checkoutPage } = require('../Pages/CheckoutPage');
const { productsPage } = require ('../Pages/productsPage')
const { thankYouPage } = require ('../Pages/thankYouPage')
const checkOutData = JSON.parse(JSON.stringify(require('../Test-Data/checkOutPageData.json')))
const loginData = JSON.parse(JSON.stringify(require('../Test-Data/loginData.json')))
const productData = JSON.parse(JSON.stringify(require('../Test-Data/productsPageData.json')))


test('Thank You Page', async({page}) => {
    const LoginPage = new loginPage(page)
    const ProductsPage = new productsPage(page)
    const CheckoutPage = new checkoutPage(page)
    const ThankYouPage = new thankYouPage(page)

    await LoginPage.goTo()
    await LoginPage.validLogin(loginData.email, loginData.password)
    await LoginPage.loginBtn()
    await ProductsPage.searchProductAddToCart(productData.productName)
    await ProductsPage.navigateToCart()
    await ProductsPage.navigateToCheckout()
    await CheckoutPage.country(checkOutData.country)
    await CheckoutPage.clickPlaceOrder()
    await ThankYouPage.clickOrders()
});