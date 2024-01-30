class loginPage{
    constructor(page){
        this.page = page
        this.signInButton = page.locator('#login')
        this.userEmail = page.locator('#userEmail')
        this.userPassword = page.locator('#userPassword')
    }
    async goTo(){
            await this.page.goto("https://rahulshettyacademy.com/client/")
        }

    async validLogin(username, password){
        await this.userEmail.fill(username)
        await this.userPassword.fill(password)
    }
    async loginBtn(){
        await this.signInButton.click()
    }
}
module.exports = {loginPage}


  