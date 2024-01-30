const {test, expect} = require('@playwright/test')
const { loginPage } = require('../Pages/loginPage'); 
const { checkoutPage } = require('../Pages/CheckoutPage');
const { productsPage } = require ('../Pages/productsPage')
const { thankYouPage } = require ('../Pages/thankYouPage')
const { orderPage } = require ('../Pages/orderPage')
const { orderSummaryPage } = require ('../Pages/orderSummaryPage')
const checkOutData = JSON.parse(JSON.stringify(require('../Test-Data/checkOutPageData.json')))
const loginData = JSON.parse(JSON.stringify(require('../Test-Data/loginData.json')))
const productData = JSON.parse(JSON.stringify(require('../Test-Data/productsPageData.json')))


test('Order Summary Page', async({page}) => {
    const LoginPage = new loginPage(page)
    const ProductsPage = new productsPage(page)
    const CheckoutPage = new checkoutPage(page)
    const ThankYouPage = new thankYouPage(page)
    const OrderPage = new orderPage(page); 
    const OrderSummaryPage = new orderSummaryPage(page);       

    await LoginPage.goTo()
    await LoginPage.validLogin(loginData.email, loginData.password)
    await LoginPage.loginBtn()
    await ProductsPage.searchProductAddToCart(productData.productName)
    await ProductsPage.navigateToCart()
    await ProductsPage.navigateToCheckout()
    await CheckoutPage.country(checkOutData.country)
    await CheckoutPage.clickPlaceOrder()  
    const orderId = await ThankYouPage.getOrderId() 
    ThankYouPage.clickOrders()
    OrderPage.searchAndClickOrderView(orderId)
    const summaryPageText = await OrderSummaryPage.getOrderSummaryText()
    expect(summaryPageText.includes('order summary')).toBeTruthy()
})