const {test, expect} = require('@playwright/test')
import { checkoutPage } from '../Pages/CheckoutPage';
const checkOutData = JSON.parse(JSON.stringify(require('../Test-Data/checkOutPageData.json')))
import { loginPage } from '../Pages/loginPage';
const loginData = JSON.parse(JSON.stringify(require('../Test-Data/loginData.json')))
import { productsPage } from '../Pages/productsPage'
const productData = JSON.parse(JSON.stringify(require('../Test-Data/productsPageData.json')))
import { thankYouPage } from '../Pages/thankYouPage';

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
    ThankYouPage.clickOrders()
});