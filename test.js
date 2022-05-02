const webdriver = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");

test();

async function test() {
  const url = "https://demoqa.com/automation-practice-form";
  let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.FIREFOX)
    .build();

  driver.get(url);

  let form = { id: "userForm" };
  let title = { css: "h5" };
  let submit = { id: "submit" };

  let firstNameInput = { id: "firstName" }
  let lastNameInput = { id: "lastName" }

  await driver.findElement(form).isDisplayed();
  await driver.findElement(submit).click();

  await driver.findElement(firstNameInput).sendKeys("Merlijn");
  await driver.findElement(lastNameInput).sendKeys("Vanherck");
  await driver.findElement(submit).click();
};
