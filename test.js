const { Key, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");
require("geckodriver");

test();

async function test() {
  const url = "https://demoqa.com/automation-practice-form";
  let driver = new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(url);

  let form = { id: "userForm" };
  let title = { css: "h5" };
  let submit = { id: "submit" };

  let firstNameInput = { id: "firstName" };
  let lastNameInput = { id: "lastName" };
  let genderMaleRadio = { xpath: "//label[@for='gender-radio-1']" };
  let genderFemaleRadio = { xpath: "//label[@for='gender-radio-2']" };
  let genderOtherRadio = { xpath: "//label[@for='gender-radio-3']" };
  let phoneNumberInput = { id: "userNumber" };

  await driver.findElement(form).isDisplayed();
  await driver.findElement(submit).sendKeys(Key.ENTER);

  await driver.findElement(firstNameInput).sendKeys("Merlijn");
  await driver.findElement(lastNameInput).sendKeys("Vanherck");
  await driver.findElement(genderMaleRadio).click();
  await driver.findElement(phoneNumberInput).sendKeys("4897652316");
  await driver.findElement(submit).sendKeys(Key.ENTER);

  const modalDialogXpath = "//*[contains(@class, 'modal-dialog')]";
  const modalDialogTableXpath = modalDialogXpath + "//tbody"
  const modalDialogNameXpath = modalDialogTableXpath + "//tr[1]/td[2]"
  const modalDialogGenderXpath = modalDialogTableXpath + "//tr[3]/td[2]"
  const modalDialogPhoneXpath = modalDialogTableXpath + "//tr[4]/td[2]"
  let modalDialog = { xpath: modalDialogXpath };
  let modalDialogName = { xpath: modalDialogNameXpath };
  let modalDialogGender = { xpath: modalDialogGenderXpath };
  let modalDialogPhone = { xpath: modalDialogPhoneXpath };

  driver.wait(driver.findElement(modalDialog).isDisplayed());
  assert(await driver.findElement(modalDialog).isDisplayed());
  
  assert(await driver.findElement(modalDialogName).getText() == "Merlijn Vanherck");
  assert(await driver.findElement(modalDialogGender).getText() == "Male");  
  assert(await driver.findElement(modalDialogPhone).getText() == "4897652316");

  await driver.close();
}
