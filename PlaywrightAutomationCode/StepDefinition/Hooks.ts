import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

let page: Page;
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60 * 1000);


BeforeAll(async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    console.log("BeforeAll")
});

Before(async function () {

    context = await browser.newContext({ viewport: null });

    page = await context.newPage();

    console.log("Before")
});

After(async function ({ pickle, result }) {

    if (result?.status === Status.FAILED) {

        const img = await page.screenshot({ path: `./test-result/ScreenshotsFailed/${pickle.name}.png` });

        await this.attach(img, 'image/png');

        const videoPath = await page.video()?.path();

        if (videoPath) {

           this.attach(videoPath, 'video/webm');

        }
    }
    else if (result?.status === Status.PASSED) {

        const img = await page.screenshot({ path: `./test-result/ScreenshotsPassed/${pickle.name}.png` });

        await this.attach(img, 'imagepasssed/png');

        const videoPath = await page.video()?.path();

        if (videoPath) {

           this.attach(videoPath, 'video/webm');

        }
    }
    console.log("after")
});

AfterAll(async function () {

    await page.close();

    await browser.close();

    console.log("afterAll")

    console.log("==============================")
});

Given('i launch the OrangeHRM application in chrome browser', async function () {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForTimeout(6000)

});

Given('Enter the username in OrangeHRM {string}', async function (username) {

    await page.locator("//input[@name='username']").fill(username);

});

Given('Enter the password in OrangeHRM {string}', async function (password) {

    await page.locator("//input[@name='password']").fill(password);

});

Given('I click on the login button in OrangeHRM', async function () {

    await page.locator("//button[@type='submit']").click();

});

Given('I click on the logout button in OrangeHRM', async function () {

    await page.locator("//*[@class='oxd-userdropdown-name']").click();

    await page.getByText("Logout").click();

});

Given('Enter the username in OrangeHRM', async function () {
    await page.locator("//input[@name='username']").fill("Admin");
    const img = await page.screenshot({ path: `./test-result/screenshots/username.png`});
    await this.attach(img, 'image/png');
});


Given('Enter the password in OrangeHRM', async function () {
    await page.locator("//input[@name='password']").fill("admin123");
    const img = await page.screenshot({ path: `./test-result/screenshots/password.png` });
    await this.attach(img, 'image/png');
});