import { Given, setDefaultTimeout, Then, } from '@cucumber/cucumber';

import { Page, Browser } from 'playwright';

import { chromium, expect, firefox, webkit } from 'playwright/test';

import { TestData1, TestData2, TestData3, OrangeHRMCredentials } from "../Files/TestData.json"

let browser: Browser, page: Page

setDefaultTimeout(60 * 1000);

Given('I launch the browser', async function () {

    console.log(" I launch the browser ")

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']

    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
})

Given('I launch the firefox browser', async function () {

    console.log(" I launch the firefox browser ")

    browser = await firefox.launch({

        headless: false,

        args: ['--start-maximized']

    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
})

Given('I launch the webkit browser', async function () {

    console.log(" I launch the webkit browser ")

    browser = await webkit.launch({

        headless: false,

        args: ['--start-maximized']

    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
})

Given('I launch the headless browser', async function () {

    console.log(" I launch the headless browser ")

    browser = await chromium.launch({

        headless: true,

        args: ['--start-maximized']

    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()
})

Then('I launch the jazz pharma application', async function () {

    await page.goto('https://www.jazzpharma.com/')

});

Then('I close the browser', async function () {

    await page.close()
});

Then('I launch the amazon application', async function () {

    //await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(5000)

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForTimeout(5000) // 5000 millisecodns means 5 seconds
});

Then('I launch the Automation Testing Practice application', async function () {

    // await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.waitForTimeout(10000)
});

Then('I verify Playwright Locators', async function () {

    //syntax: Await page.getByPlaceholder(“attribute value of the placeholder attribute name”).methods()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForTimeout(5000)

    await page.getByPlaceholder("Enter Name").fill("Monday")

    await page.getByPlaceholder("Enter EMail").fill("Monday@gmail.com")

    await page.getByText("START").click()

    await page.getByText("STOP").click()

    await page.getByRole('button', { name: 'START' }).click()

    await page.getByRole('button', { name: 'STOP' }).click()

    await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded()

    await page.getByRole('checkbox', { name: 'Sunday' }).click()

    await page.getByRole('checkbox', { name: 'Monday' }).click()

    await page.getByRole('checkbox', { name: 'Tuesday' }).click()

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    await page.waitForTimeout(5000)

    await page.getByAltText("ParaBank").click()

    await page.getByTitle("ParaBank").click()

    await page.goto('https://login.salesforce.com/')

    await page.waitForTimeout(5000)

    await page.getByLabel("Username").type("nitai")

    await page.getByLabel("Password").type('thoughts')
});

Then('I verify xpath locators', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //absolute xpath

    //Await page.locator(‘absolute path’/’relative xpath’).methods()

    //await page.locator("/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]").fill("Sekhar")

    //relative xpath

    await page.locator("//input[@placeholder='Enter Name']").fill("Sekhar")

    await page.locator("//*[@id='email']").fill("suraj@gmail.com")

    // css selector

    await page.locator("input[id='phone']").fill("9090899089")

    //css selector using id attribute

    await page.locator("#Wikipedia1_wikipedia-search-input").fill("testing")

    //  css selector using class attribute

    await page.locator(".wikipedia-search-button").click()

});

Then('I verify xpath methods', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log("=====================contains method===================")

    await page.locator("//input[contains(@id,'male')]").first().click()

    await page.locator("//*[contains(@id,'textarea')]").fill("Hyderabad")

    //(//input[contains(@id,'male')])[1]

    console.log("=====================starts method===================")

    await page.locator("//input[starts-with(@id,'female')]").click()

    await page.locator("//*[starts-with(@id,'sunday')]").click()

    console.log("=====================Text===================")

    var text = await page.locator("//span[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("1st way is = ", text)

    text = await page.locator("//*[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("2nd way is = ", text)

    text = await page.locator("//*[contains(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("3rd way is = ", text)

    text = await page.locator("//*[starts-with(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("4th way is = ", text)

    /*1st way is =  For Selenium, Cypress & Playwright
2nd way is =  For Selenium, Cypress & Playwright
3rd way is =  For Selenium, Cypress &amp; Playwright
4th way is =  For Selenium, Cypress &amp; Playwright*/

    console.log("=====================And===================")

    await page.locator("//input[@type='text' and @id='field2']").fill("Lakshmi")

    await page.locator("//*[@type='text' and @id='field1']").fill("Testing")

    console.log("=====================or===================")

    let orCount = await page.locator("//input[@type='text' or @id='field2']").all()

    console.log("orCount is", orCount)

    console.log("orCount is", orCount.length) //orCount is 13

    console.log("=====================css contains method===================")

    await page.locator("input[id*='monday']").click()

    console.log("=====================css starts method===================")

    await page.locator("input[id^='tuesday']").click()

});


// Then('i verify webcalendar dynamically', async function () {

//     await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

//     let datePicker = await page.locator("//input[@id='datepicker']")

//     if (datePicker.isVisible()) {

//         console.log("datePicker is displayed on the webpage");

//         await page.locator("//input[@id='datepicker']").click();

//         let calendarTable = await page.locator(".ui-datepicker-calendar");

//         if (calendarTable.isVisible()) {

//             console.log("calendarTable is displayed on the webpage");

//             let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

//             console.log(" rows count is :" + rows.length);

//             if (rows.length > 0) {

//                 console.log("calendar have rows");

//                 for (let i = 1; i <= rows.length; i++) {

//                     let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

//                     console.log(" columns count is :" + columns.length);

//                     if (columns.length > 0) {

//                         console.log("calendar have columns");

//                         for (let j = 1; j <= columns.length; j++) {

//                             let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

//                             let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

//                             let expectedDate = "30";

//                             if (actualDate1 == expectedDate) {

//                                 console.log("date :" + actualDate1
//                                     + " is displayed in the calendar row number " + i
//                                     + " and column number is: " + j);

//                                 actualDate.click();
//                             }
//                         }

//                     } else {

//                         console.log("calendar doesn't have columns");
//                     }
//                 }

//             } else {

//                 console.log("calendar doesn't have rows");
//             }
//         }
//         else {
//             console.log("calendarTable is not displayed on the webpage");
//         }
//     }
//     else {
//         console.log("datePicker is not displayed on the webpage");
//     }
// });


Then('I verify xpath Axes', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log("=====================parent===================")

    let parentCount = await page.locator("//input[@id='name']//parent::div").all()

    console.log("parentCount is", parentCount.length) //parentCount is 1

    parentCount = await page.locator("//input[@class='wikipedia-search-input']//parent::span").all()

    console.log("parentCount is", parentCount.length) //parentCount is 1

    console.log("=====================ancestor===================")

    let ancestorCount = await page.locator("//input[@id='name']//ancestor::div").all()

    console.log("ancestorCount is", ancestorCount.length) //ancestorCount is 20

    console.log("=====================preceding===================")

    let precedingCount = await page.locator("//input[@id='name']//preceding::div").all()

    console.log("precedingCount is", precedingCount.length) //precedingCount is 94

    console.log("=====================child===================")

    let childCount = await page.locator("//div[@class='form-group']//child::input[@type='text']").all()

    console.log("childCount is", childCount.length) //childCount is 3

    await page.locator("//div[@class='form-group']//child::input[@type='text']").first().fill("jagadeesh")

    console.log("=====================descendant===================")

    let descendantCount = await page.locator("//div[@class='form-group']//descendant::input[@type='text']").all()

    console.log("descendantCount is", descendantCount.length) //descendantCount is 3

    await page.locator("//div[@class='form-group']//descendant::input[@type='text']").last().fill("7878909090")

    console.log("=====================following===================")

    let followingCount = await page.locator("//div[@class='form-group']//following::input[@type='text']").all()

    console.log("followingCount is", followingCount.length) //followingCount is 13

    console.log("=====================followingSibling===================")

    let followingSiblingCount = await page.locator("//input[@placeholder='Enter Name']//following-sibling::input").all()

    console.log("followingSiblingCount is", followingSiblingCount.length) //followingSiblingCount is 2

    await page.locator("//input[@placeholder='Enter Name']//following-sibling::input[@id='email']").fill("hyd@hyd.com")

});

Then('I verify Playwright methods', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log("=====================to reload the web page===================")

    await page.reload()

    console.log("=====================to click the web element===================")

    await page.getByText("New Tab").click()

    console.log("=====================to go to previous tab===================")

    await page.bringToFront()

    await page.locator("//button[text()='START']").click()

    console.log("=====================to enter text to the textbox===================")

    await page.locator("//input[@placeholder='Enter Name']").fill("Friday")

    await page.locator("//input[@placeholder='Enter EMail']").type("Morning@gmail.com")

    console.log("=====================to get more than one web element count at a time===================")

    let followingSiblingCount = await page.locator("//input[@placeholder='Enter Name']//following-sibling::input").all()

    console.log("followingSiblingCount is", followingSiblingCount.length) //followingSiblingCount is 2

    console.log("=====================to get the page title===================")

    console.log(await page.title()) //Automation Testing Practice

    console.log("=====================to get the url===================")

    console.log(await page.url()) //https://testautomationpractice.blogspot.com/

    console.log("=====================to scroll to the respective web element===================")

    await page.locator("#field1").scrollIntoViewIfNeeded()

    console.log("=====================to clear the text of the web element===================")

    await page.locator("#field1").clear()

    await page.locator("#field1").fill("Quality Thought")

    console.log("=====================to read the text of the specific web element===================")

    var text = await page.locator("//span[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("1st way is = ", text)

    text = await page.locator("//*[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("2nd way is = ", text)

    text = await page.locator("//*[contains(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("3rd way is = ", text)

    text = await page.locator("//*[starts-with(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("4th way is = ", text)

    /*1st way is =  For Selenium, Cypress & Playwright
2nd way is =  For Selenium, Cypress & Playwright
3rd way is =  For Selenium, Cypress &amp; Playwright
4th way is =  For Selenium, Cypress &amp; Playwright*/

    console.log("=====================to read the text for more than one web element===================")

    var textOfTheWebElement = await page.locator("//*[@class='title']").allInnerTexts()

    console.log("textOfTheWebElement 1st way is ", textOfTheWebElement.length) //textOfTheWebElement 1st way is 17

    console.log("================for loops==============")

    for (let i = 0; i < textOfTheWebElement.length; i++) {

        console.log(textOfTheWebElement[i])
    }

    /*Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/

    console.log("=====================to read the text for more than one web element 2nd way===================")

    var textOfTheWebElement = await page.locator("//*[@class='title']").allTextContents()

    console.log("textOfTheWebElement 2nd way is ", textOfTheWebElement.length) //textOfTheWebElement 1st way is 17

    console.log("================for loops==============")

    for (let i = 0; i < textOfTheWebElement.length; i++) {

        console.log(textOfTheWebElement[i])
    }

    /*Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/

    console.log("=====================to read the text for more than one web element 2nd way===================")

    await page.locator("#field2").click({ button: 'right' })

    var db = await page.locator("//h2[text()='Dynamic Button']").innerHTML()

    console.log("  ", db)

    console.log("  ", await page.locator("//h2[text()='Dynamic Button']").innerHTML())

    console.log("  ", await page.locator("//h2[text()='Dynamic Button']").innerText())

});

Then('I verify Playwright methods part2', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log("=====================hidden===================")

    let hidden = await page.locator("#female").isHidden()

    console.log(" hidden status is ", hidden)

    if (hidden == false) {

        await page.locator("#female").click()
    }

    console.log("=====================visible===================")

    let visible = await page.locator("#sunday").isVisible()

    console.log(" visible status is ", visible)

    if (visible == true) {

        await page.locator("#sunday").click()
    }

    console.log("=====================disabled===================")

    let disabled = await page.locator("#monday").isDisabled()

    console.log(" disabled status is ", disabled)

    if (disabled == false) {

        await page.locator("#monday").click()
    }

    console.log("=====================enabled===================")

    let enabled = await page.locator("#tuesday").isEnabled()

    console.log(" enabled status is ", enabled)

    if (enabled == true) {

        await page.locator("#tuesday").click()
    }

    console.log("=====================editable===================")

    let editable = await page.locator("#textarea").isEditable()

    console.log(" editable status is ", editable)

    if (editable == true) {

        await page.locator("#textarea").fill("hi everyone good morning")
    }

    console.log("=====================checked===================")

    let checked = await page.locator("#saturday").isChecked()

    console.log(" checked status is ", checked)

    if (checked == false) {

        //1st way

        //await page.locator("#saturday").click()

        //2nd way

        await page.locator("#saturday").setChecked(true)

        checked = await page.locator("#saturday").isChecked()

        console.log(" checked status is ", checked) // true
    }
    if (checked == true) {

        //1st way

        //await page.locator("#saturday").click()

        //2nd way

        // await page.locator("#saturday").uncheck()

        //3rd way

        await page.locator("#saturday").setChecked(false)

        checked = await page.locator("#saturday").isChecked()

        console.log(" checked status is ", checked) // false
    }
});

Then('I verify Playwright methods part3', async function () {

    await page.goto('https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home')

    console.log("=====================hover===================")

    await page.locator("//div[@id='nav-subnav']//li").nth(1).hover()

    await page.locator("//div[@id='nav-subnav']//li").nth(4).hover()

    console.log("=====================hightlight===================")

    await page.getByPlaceholder("Search Amazon.in").highlight()

    await page.getByPlaceholder("Search Amazon.in").fill("mobiles")

    console.log("=====================getAtttribute===================")

    var attributeValue = await page.getByPlaceholder("Search Amazon.in").getAttribute("id")

    console.log("attributeValue of id", attributeValue) //twotabsearchtextbox

    attributeValue = await page.getByPlaceholder("Search Amazon.in").getAttribute("name")

    console.log("attributeValue of name", attributeValue) //field-keywords

    attributeValue = await page.getByPlaceholder("Search Amazon.in").getAttribute("placeholder")

    console.log("attributeValue of placeholder", attributeValue) //Search Amazon.in

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#field1").scrollIntoViewIfNeeded()

    console.log("=============1st way to clear the text to the textbox============= ")

    await page.locator("#field1").clear()

    await page.locator("#field1").type("quality")

    console.log("=============2nd way to clear the text to the textbox============= ")

    await page.locator("#field1").fill(" ")

    await page.locator("#field1").type("online")

    console.log("=============3rd way to clear the text to the textbox using keys============= ")

    await page.locator("#field1").press('Control+A')

    await page.keyboard.press("Delete") // clicking the key in the keyboard

    await page.keyboard.up("Control") //up means releasing the key from the keyboard

    await page.keyboard.insertText("Amit")

    console.log("=============4th way to enter the text to the textbox============= ")

    //pressSequentially method will behave same like a type method means it will conact new value/text with the old value/text

    await page.locator("#field1").clear()

    await page.locator("#field1").pressSequentially("suraj")

    await page.locator("#field1").pressSequentially("lakshmi")

    console.log("=============drag and drop============= ")

    const drag = await page.locator("#draggable")

    const drop = await page.locator("#droppable")

    await drag.scrollIntoViewIfNeeded()

    await drag.dragTo(drop)
});

Then('I verify Playwright methods part4', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    var colorDropdown = await page.locator("#colors")

    await colorDropdown.scrollIntoViewIfNeeded()

    await colorDropdown.selectOption('Red')

    await colorDropdown.selectOption('Green')

    await colorDropdown.selectOption('Yellow')

    await colorDropdown.selectOption(['Yellow', 'Red', 'Blue'])

    /* class work

    1) perfrom dropdown selection for the Sorted List dropdown 

    2) select country option in a country dropdown using for loops
    
    -> all options in inner texts, for loop, if condition, sleecting the option*/

    await page.locator("//*[@id='country']").click()

    var count = await page.locator("//*[@id='country']/option").allInnerTexts()

    for (let i = 0; i < count.length; i++) {

        var countryName = await page.locator("//*[@id='country']/option").nth(i).getAttribute('value')

        console.log("countryName is :", countryName)

        if (countryName == 'india') {

            await page.locator("//*[@id='country']").selectOption({ index: 9 })
        }

    }

    console.log("=============screenshots============= ")

    console.log("=============1st way to take screen shot of a web element============= ")

    await page.getByPlaceholder("Enter Name").scrollIntoViewIfNeeded()

    await page.getByPlaceholder("Enter Name").fill("Saturday")

    await page.getByPlaceholder("Enter Name").screenshot({ path: 'webelement_screenshot.png' })

    console.log("=============2nd way to take screen shot upto screen length============= ")

    await page.screenshot({ path: 'uptoscreenlength.jpg' })

    console.log("=============3rd way to take screen shot of full page============= ")

    await page.screenshot({ path: 'fullpagescreenshot.jpg', fullPage: true })

    console.log("=============store the screen shot in a folder level============ ")

    await page.screenshot({ path: './test-result/screenshots/fullpagescreenshot.jpg', fullPage: true })

    await page.goBack()

    await page.goForward()
});


Then('I verify dates in real time way', async function () {

    const todaysDate = new Date()

    const completeMonthName = todaysDate.toLocaleString('en-US', { month: 'long' })

    console.log("completeMonthName is", completeMonthName) //December

    const shortMonthName = todaysDate.toLocaleString('en-US', { month: 'short' })

    console.log("shortMonthName is", shortMonthName) // Dec

    console.log(todaysDate) //2025-12-08T01:44:38.692Z

    const currentDate = todaysDate.toLocaleDateString()

    console.log(currentDate) //8/12/2025

    const yesterdaysDate = new Date(todaysDate)

    yesterdaysDate.setDate(todaysDate.getDate() - 1)

    console.log(yesterdaysDate.toLocaleDateString()) //7/12/2025 

    const futureDate = new Date(todaysDate)

    futureDate.setDate(todaysDate.getDate() + 365)

    console.log(futureDate.toLocaleDateString()) //8/12/2026

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//*[@id='datepicker']").scrollIntoViewIfNeeded()

    await page.locator("//*[@id='datepicker']").fill(futureDate.toLocaleDateString())

    const year = todaysDate.getFullYear().toString()

    const month = (todaysDate.getMonth() + 1).toString()

    const day = todaysDate.getDate().toString()

    console.log(month, '-', day, '-', year) // 12 -08- 2025

    console.log(month, '/', day, '/', year) // 12/08/2025

    console.log(day, '/', month, '/', year) // 

    console.log(year, '/', day, '/', month) //

    await page.locator("//*[@id='datepicker']").fill(month + "/" + day + "/" + year)

});

Then('I verify web table in static way', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log(" webTable is displayed in the web page")

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = "Animesh"

        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[4]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText + " is displayed in the web page")
        }
        else {

            console.log(expectedText + " is not displayed in the web page")
        }

    }
    else {

        console.log(" webTable is not displayed in the web page")

    }

});

Then('I verify web table in static way2', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log(" webTable is displayed in the web page")

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = "Javascript"

        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[4]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText + " is displayed in the web page")
        }
        else {

            console.log(expectedText + " is not displayed in the web page")
        }

    }
    else {

        console.log(" webTable is not displayed in the web page")

    }

});


Then('I verify web calendar in static way', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//*[@id='datepicker']").scrollIntoViewIfNeeded()

    await page.locator("//*[@id='datepicker']").click()

    let webCalendarTable = await page.locator(".ui-datepicker-calendar").isVisible()

    if (webCalendarTable == true) {

        console.log(" webCalendarTable is displayed in the web page")

        let expectedDateText = "31"

        let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[5]/td[4]")

        let actualDateText = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[5]/td[4]").innerText()

        if (expectedDateText == actualDateText) {

            console.log(expectedDateText + " is displayed in the web page")

            //1st way

            await actualDate.click()

            //2nd way

            //await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[5]/td[4]").click()
        }
        else {

            console.log(expectedDateText + " is not displayed in the web page")
        }

    }
    else {

        console.log(" webCalendarTable is not displayed in the web page")

    }

});

Then('I verify And in playwright', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill("suraj")

    //1st way

    console.log("========================xpath and method==================")

    await page.locator("//input[@placeholder='Enter EMail' and @id='email' and @type='text']").fill("quality@gmail.com")

    //2nd way

    console.log("========================playwright and method==================")

    await page.getByPlaceholder("Enter Phone").and(page.locator("#phone")).fill("9090909090")

    await page.locator(".wikipedia-search-input").and(page.locator("#Wikipedia1_wikipedia-search-input")).fill("9090909090")

});

Then('I verify web table in dynamic way', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log(" webTable is displayed in the web page")

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let rows = await page.locator("//table[@name='BookTable']/tbody/tr").all()

        if (rows.length > 0) {

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        let expectedText = "Java"

                        let actualText = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        console.log("=====================using equals method==============")

                        if (actualText == expectedText) {

                            console.log(expectedText + " is displayed in the web page on the row no " + i + " and the column is " + j)
                        }

                        console.log("=====================contains means includes==============")

                        if (actualText.includes(expectedText)) {

                            console.log(expectedText + " is displayed in the web page on the row no " + i + " and the column is " + j)
                        }
                    }
                }
            }

        }
        else {

            console.log(" web table doesn't have rows")
        }

    }
    else {

        console.log(" webTable is not displayed in the web page")

    }

});

Then('I verify hard assertions', async function () {

    await page.goto("https://www.amazon.in/")

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible()

    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles")

    //await expect(page.locator("//*[text()='Sell']")).toBeHidden()

    //await expect(page.locator("//*[text()='Sell']")).toBeDisabled()

    await expect(page.locator("//*[text()='Sell']")).toBeEnabled()

    await page.locator("//*[text()='Sell']").click()

    await expect(page.locator("#nav-cart-text-container")).toBeAttached()

    await expect(page.locator("#nav-cart-text-container")).toHaveCount(1)

    await expect(page.locator("//div[@id='nav-xshop-container']/div/ul/li")).toHaveCount(32)

    let tabs = await page.locator("//div[@id='nav-xshop']/ul/li/div/a").allInnerTexts()

    // await page.goto("https://www.swiggy.com/")

    // await expect(page.locator("//*[text()='Sign in']")).toContainText("Sign in")

    // await expect(page.locator("//div[@class='Uccaw']/a")).toContainText(["Swiggy Corporate","Partner with us"])

    await page.goto("https://testautomationpractice.blogspot.com/")

    tabs = await page.locator("//*[@class='title']").allInnerTexts()

    await expect(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")

    await expect(page.locator("//*[@class='title']")).toContainText(["Upload Files", "Static Web Table"])

    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")

    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute("id", "name")

    await expect(page.getByPlaceholder("Enter EMail")).toHaveId("email")

    await expect(page.getByPlaceholder("Enter EMail")).toBeEmpty()

    await page.getByPlaceholder("Enter EMail").fill("tuesday@gmail.com")

    await expect(page.locator("//*[text()='START']")).toHaveRole("button")

    await expect(page.locator("//*[text()='START']")).toHaveText('START')

    await expect(page.locator("//*[text()='START']")).toBeTruthy()

    await page.locator("//*[text()='START']").click()

    console.log("==============hi everyone===============")
});


Then('I verify soft assertions', async function () {

    await page.goto("https://www.amazon.in/")

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeVisible()

    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles")

    //await expect(page.locator("//*[text()='Sell']")).toBeHidden()

    //await expect(page.locator("//*[text()='Sell']")).toBeDisabled()

    await expect.soft(page.locator("//*[text()='Sell']")).toBeEnabled()

    await page.locator("//*[text()='Sell']").click()

    await expect.soft(page.locator("#nav-cart-text-container")).toBeAttached()

    await expect.soft(page.locator("#nav-cart-text-container")).toHaveCount(1)

    await expect.soft(page.locator("//div[@id='nav-xshop-container']/div/ul/li")).toHaveCount(32)

    let tabs = await page.locator("//div[@id='nav-xshop']/ul/li/div/a").allInnerTexts()

    // await page.goto("https://www.swiggy.com/")

    // await expect(page.locator("//*[text()='Sign in']")).toContainText("Sign in")

    // await expect(page.locator("//div[@class='Uccaw']/a")).toContainText(["Swiggy Corporate","Partner with us"])

    await page.goto("https://testautomationpractice.blogspot.com/")

    tabs = await page.locator("//*[@class='title']").allInnerTexts()

    await expect.soft(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")

    await expect.soft(page.locator("//*[@class='title']")).toContainText(["Upload Files", "Static Web Table"])

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute("id", "name")

    await expect.soft(page.getByPlaceholder("Enter EMail")).toHaveId("email")

    await expect.soft(page.getByPlaceholder("Enter EMail")).toBeEmpty()

    await page.getByPlaceholder("Enter EMail").fill("tuesday@gmail.com")

    await expect.soft(page.locator("//*[text()='START']")).toHaveRole("button")

    await expect.soft(page.locator("//*[text()='START']")).toHaveText('START')

    await expect.soft(page.locator("//*[text()='START']")).toBeTruthy()

    await page.locator("//*[text()='START']").click()

    console.log("==============hi everyone===============")
});

Then('I verify playwright filter', async function () {

    await page.goto("https://www.saucedemo.com/")

    await page.getByPlaceholder("Username").fill("standard_user")

    await page.getByPlaceholder("Password").fill("secret_sauce")

    await page.locator("#login-button").click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Remove' }).click()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'Monday' }).click()

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'Friday' }).click()

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'Satu' }).click()

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'FeMa' }).click()

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'Male' }).first().click()

    /* use the same for start and stop button*/

});

Then('I verify playwright simple alert', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', (dialog) => {

        console.log("dialog/poup type is", dialog.type())//alert

        expect(dialog.type()).toContain('alert')

        console.log("dialog/poup message is", dialog.message()) //I am a JS Alert

        expect(dialog.message()).toContain('I am a JS Alert')

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()

});

Then('I verify playwright confirmation alert', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', (dialog) => {

        console.log("dialog/poup type is", dialog.type())//confirm

        expect(dialog.type()).toContain('confirm')

        console.log("dialog/poup message is", dialog.message()) //I am a JS Confirm

        expect(dialog.message()).toContain('I am a JS Confirm')

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

});

Then('I verify playwright confirmation alert2', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', (dialog) => {

        console.log("dialog/poup type is", dialog.type())//confirm

        expect(dialog.type()).toContain('confirm')

        console.log("dialog/poup message is", dialog.message()) //I am a JS Confirm

        expect(dialog.message()).toContain('I am a JS Confirm')

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

});

Then('I verify playwright prompt alert', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', (dialog) => {

        console.log("dialog/poup type is", dialog.type())//prompt

        expect(dialog.type()).toContain('prompt')

        console.log("dialog/poup message is", dialog.message()) //I am a JS prompt

        expect(dialog.message()).toContain('I am a JS prompt')

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Then('I verify playwright prompt alert1', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', (dialog) => {

        console.log("dialog/poup type is", dialog.type())//prompt

        expect(dialog.type()).toContain('prompt')

        console.log("dialog/poup message is", dialog.message()) //I am a JS prompt

        expect(dialog.message()).toContain('I am a JS prompt')

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});


Then('I verify playwright prompt alert2', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', (dialog) => {

        console.log("dialog/poup type is", dialog.type())//prompt

        expect(dialog.type()).toContain('prompt')

        console.log("dialog/poup message is", dialog.message()) //I am a JS prompt

        expect(dialog.message()).toContain('I am a JS prompt')

        dialog.accept('Hi Quality Thought team good morning')
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});


Then('I verify file uploading', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    console.log("================upload single file============")

    await page.locator("#singleFileInput").scrollIntoViewIfNeeded()

    //1st way

    var singleFileUpload = await page.waitForSelector("#singleFileInput")

    await singleFileUpload.setInputFiles("./test-result/screenshots/fullpagescreenshot.jpg")

    //2nd way

    //await page.locator("#singleFileInput").setInputFiles("./test-result/screenshots/fullpagescreenshot.jpg")

    await page.locator("//button[text()='Upload Single File']").click()

    console.log("================upload Multiple file============")

    var multiFileUpload = await page.waitForSelector("#multipleFilesInput")

    await multiFileUpload.setInputFiles(["./test-result/screenshots/uptoscreenlength.jpg", "./test-result/screenshots/webelement_screenshot.png"])

    await page.locator("//button[text()='Upload Multiple Files']").click()

    singleFileUpload = await page.waitForSelector("#singleFileInput")

    await singleFileUpload.setInputFiles("C:/Users/Abcom/OneDrive/Desktop/Automation_Playwright/25thOct2025/Playwright Topics/10th Class_Frames_upload files/Frames.docx")

    await page.locator("//button[text()='Upload Single File']").click()

    //await singleFileUpload.setInputFiles("C:\\Users\\Abcom\\OneDrive\\Desktop\\Automation_Playwright\\25thOct2025\\Playwright Topics\\10th Class_Frames_upload files\\Frames.docx")

    var multiFileUpload = await page.waitForSelector("#multipleFilesInput")

    await multiFileUpload.setInputFiles(["./test-result/screenshots/uptoscreenlength.jpg", "./test-result/screenshots/webelement_screenshot.png"])

    await page.locator("//button[text()='Upload Multiple Files']").click()

    //questions

    //await singleFileUpload.setInputFiles("C:\\Users\\Abcom\\OneDrive\\Desktop\\Automation_Playwright\\25thOct2025\\Playwright Topics\\10th Class_Frames_upload files\\Frames.docx")

    //  var multiFileUpload = await page.waitForSelector("#multipleFilesInput")

    // await multiFileUpload.setInputFiles(["./test-result/screenshots/uptoscreenlength.jpg","./test-result/screenshots/uptoscreenlength.png"])

    // await page.locator("//button[text()='Upload Multiple Files']").click()

    /*classwork: handle frames in https://the-internet.herokuapp.com/nested_frames*/

});

Then('I verify frames', async function () {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    var allFramsCount = await page.frames()

    console.log("allFramsCount is ", allFramsCount.length)

    /*
    syntax:
await page.framelocator(xpath/url).locator(locator/playwrightlocator).framesmethod()

     */

    //1st way

    //await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]').fill("Hi team how are you")

    //2nd way

    const frame1 = await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]')

    frame1.fill("quality thoughts")

    //3rd way

    var frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    await frame3?.fill('//input[@name="mytext3"]', "thrusday")

    var childFramesCount = await frame3?.childFrames()

    console.log("childFramesCount is ", childFramesCount?.length) //1

    if (childFramesCount && childFramesCount.length > 0) {

        await childFramesCount[0].locator("//span[text()='Hi, I am the UI.Vision IDE']").click()

        await childFramesCount[0].locator("//span[text()='Web Testing']").click()
    }

    var frame4 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_4.html' })

    await frame4?.fill('//input[@name="mytext4"]', "sekhar")

    // if(childFrams && childFrams.length > 0)
    //      {
    //            await childFrams[0].locator("//span[text()='Hi, I am the UI.Vision IDE']").click()
    //            await childFrams[0].locator("//span[text()='Web Testing']").click()
    //            await childFrams[0].locator("//div[@role='option']").first().click()
    //            await childFrams[0].locator("//span[text()='Well, now I know :-)']").click()
    //         }
    //    await page.waitForTimeout(1000)
});


Then('I verify waits', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //syntax: await page.waitForTimeout (10000)// 10000 means 10000 milliseconds means 10 seconds

    console.log("==================wait for timeout===================")

    await page.waitForTimeout(10000) // 10 seconds

    await page.locator("//input[@name='username']").fill("Admin")

    console.log("==================wait for selector===================")

    /*syntax: 
1st way:
await page.waitForSelector (webelement)
2nd way:
await page. waitForSelector (webelement, {timeout:10000)})// 10000 means 10000 milliseconds means 10 seconds
*/
    console.log("==================1st way===================")

    await page.waitForSelector("//input[@name='password']")

    await page.locator("//input[@name='password']").fill("admin123")

    console.log("==================2nd way===================")

    await page.waitForSelector("//button[@type='submit']", { timeout: 10000 })

    await page.locator("//button[@type='submit']").click()

    console.log("==================wait for load state===================")

    // /await page.waitForLoadState ()

    //1st way

    await page.waitForLoadState()

    await page.locator("//span[text()='Admin']").click()

    //2nd way

    await page.waitForLoadState("domcontentloaded") // html and dom content is loaded on the web page

    await page.locator("//span[text()='PIM']").click()

    //3rd way

    await page.waitForLoadState("load") // html, css and images is loaded on the web page

    await page.locator("//span[text()='Leave']").click()

    //4th way

    await page.waitForLoadState("load", { timeout: 8000 }) // html, css and images is loaded on the web page

    await page.locator("//span[text()='Time']").click()

    //5th way

    await page.waitForLoadState("domcontentloaded", { timeout: 8000 }) // html and dom content is loaded on the web page

    await page.locator("//span[text()='Recruitment']").click()

    //6th way

    await page.waitForLoadState("networkidle", { timeout: 8000 }) // no network issues

    await page.locator("//span[text()='PIM']").click()

    //7th way

    await page.waitForLoadState("networkidle") // no network issues

    await page.locator("//span[text()='Leave']").click()

});


Then('I verify windows handling', async function () {

    console.log(" I launch the browser ")

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']

    })

    const context = await browser.newContext({ viewport: null })

    let page1 = await context.newPage()

    let page2 = await context.newPage()

    let page3 = await context.newPage()

    let allPagesCount = context.pages()

    console.log("allPagesCount is", allPagesCount.length) //allPagesCount is 3

    await page1.goto("https://testautomationpractice.blogspot.com/")

    await expect(page1).toHaveTitle("Automation Testing Practice")

    await page2.goto("https://login.salesforce.com/")

    await expect(page2).toHaveTitle("Login | Salesforce")

    await page3.goto("https://www.facebook.com/")

    await expect(page3).toHaveTitle("Facebook – log in or sign up")

    await allPagesCount[0].bringToFront()

    await page1.getByText("New Tab").scrollIntoViewIfNeeded()

    await page1.getByText("New Tab").click()

    await page1.waitForTimeout(5000)

    allPagesCount = context.pages()

    console.log("allPagesCount is", allPagesCount.length) //allPagesCount is 4

    // console.log("title of the new page is", allPagesCount[3].title())

    await allPagesCount[3].close()

    console.log("===================switch to 2nd tab and enter credentials============")

    await allPagesCount[1].bringToFront()

    await page2.getByLabel('Username').fill("quality")

    await page2.getByLabel('Password').fill("thought")

    console.log("===================switch to 1st tab and enter credentials============")

    await allPagesCount[0].bringToFront()

    const pagePopup = page1.waitForEvent("popup")

    await page1.getByText("Popup Windows").scrollIntoViewIfNeeded()

    await page1.getByText("Popup Windows").click()

    const popupPage = await pagePopup

    console.log("title of the popup is", popupPage.title())

    allPagesCount = context.pages()

    console.log("allPagesCount is", allPagesCount.length) //allPagesCount is 3

    /*class work
    
     open 10 tabs and you need to switch to tab which have facebook

     for(let i =0 ; i< allPagesCount.length; i++){
     
         if(allPagesCount[0].getTitle() == "facebook"){
         
         await allPagesCount[0].bringToFront()
         }
     }
    
    */
});

Then('I Verify automation test practice applictaion with Testdata1', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill(TestData1.Name)

    await page.getByPlaceholder("Enter EMail").fill(TestData1.Email)

    await page.getByPlaceholder("Enter Phone").and(page.locator("#phone")).fill(TestData1.Phone)

    await page.locator("//*[contains(@id,'textarea')]").fill(TestData1.Address)

    await page.locator("#Wikipedia1_wikipedia-search-input").fill(TestData1.Wikipedia)

    await page.locator(".wikipedia-search-button").click()

});


Then('I Verify automation test practice applictaion with Testdata2', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill(TestData2.Name)

    await page.getByPlaceholder("Enter EMail").fill(TestData2.Email)

    await page.getByPlaceholder("Enter Phone").and(page.locator("#phone")).fill(TestData2.Phone)

    await page.locator("//*[contains(@id,'textarea')]").fill(TestData2.Address)

    await page.locator("#Wikipedia1_wikipedia-search-input").fill(TestData2.Wikipedia)

    await page.locator(".wikipedia-search-button").click()

});

Then('I Verify automation test practice applictaion with Testdata3', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill(TestData3.Name)

    await page.getByPlaceholder("Enter EMail").fill(TestData3.Email)

    await page.getByPlaceholder("Enter Phone").and(page.locator("#phone")).fill(TestData3.Phone)

    await page.locator("//*[contains(@id,'textarea')]").fill(TestData3.Address)

    await page.locator("#Wikipedia1_wikipedia-search-input").fill(TestData3.Wikipedia)

    await page.locator(".wikipedia-search-button").click()

});

Then('I Verify orange HRM applictaion with testdata', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@name='username']").fill(OrangeHRMCredentials.Username)

    await page.locator("//input[@name='password']").fill(OrangeHRMCredentials.Password)

});


Then('I Verify automation test practice applictaion by passing the Testdata over the feature file {string},{string},{string},{string},{string}', async function (Name, Email, Phone, Address, Wikipedia) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill(Name)

    await page.getByPlaceholder("Enter EMail").fill(Email)

    await page.getByPlaceholder("Enter Phone").and(page.locator("#phone")).fill(Phone)

    await page.locator("//*[contains(@id,'textarea')]").fill(Address)

    await page.locator("#Wikipedia1_wikipedia-search-input").fill(Wikipedia)

    await page.locator(".wikipedia-search-button").click()
});

Then('I Verify orange HRM applictaion by passing the Testdata over the feature file {string},{string}', async function (username, password) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@name='username']").fill(username)

    await page.locator("//input[@name='password']").fill(password)

    await page.locator("//button[@type='submit']").click()

});

Then('I verify dropdowns in frames', async function () {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    var frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    await frame3?.fill('//input[@name="mytext3"]', "thrusday")

    var childFramesCount = await frame3?.childFrames()

    console.log("childFramesCount is ", childFramesCount?.length) //1

    if (childFramesCount && childFramesCount.length > 0) {

        await childFramesCount[0].locator("//span[text()='Hi, I am the UI.Vision IDE']").click()

        await childFramesCount[0].locator("//span[text()='Web Testing']").click()

        await childFramesCount[0].locator("//span[text()='Choose']").click()

        var texts = await childFramesCount[0].locator("//div[@jsname='wQNmvb']//span").allInnerTexts()

        for (let i = 0; i < texts.length; i++) {

            console.log("dropdown option texts are ", texts[i])

            if (texts[i] == "Yes") {

                await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByText('Yes').nth(i).click();
            }
        }
    }
});





































