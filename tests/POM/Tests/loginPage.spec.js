const {test, expect} = require('@playwright/test')
// const { loginPage } = require('../Pages/loginPage')
import { loginPage } from '../Pages/loginPage';
const data = JSON.parse(JSON.stringify(require('../Test-Data/loginData.json')))

test('Login', async({page}) => {
    const LoginPage = new loginPage(page)

    await LoginPage.goTo()
    await LoginPage.validLogin(data.email, data.password)
    await LoginPage.loginBtn()
});