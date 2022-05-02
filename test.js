const webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.CHROME)
    .build();