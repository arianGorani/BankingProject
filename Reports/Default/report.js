$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC2.feature");
formatter.feature({
  "line": 2,
  "name": "PopUp verification",
  "description": "",
  "id": "popup-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TC-2 Verify pop up an alert is displayed when the user opens account",
  "description": "",
  "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Open Account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I chose \u0027Harry Potter\u0027 on dropdown Customer Name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I chose \u0027Dollar\u0027 on dropdown Currency",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the Process button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify pop up alert is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 14,
      "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 15,
      "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 16,
      "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;3"
    },
    {
      "cells": [
        "Edge"
      ],
      "line": 17,
      "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "TC-2 Verify pop up an alert is displayed when the user opens account",
  "description": "",
  "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Open Account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I chose \u0027Harry Potter\u0027 on dropdown Customer Name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I chose \u0027Dollar\u0027 on dropdown Currency",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the Process button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify pop up alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Chrome",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 4823272000,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 148902500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 175468400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 9
    }
  ],
  "location": "openAccountSteps.i_chose_Harry_Potter_on_dropdown_Customer_Name(String)"
});
formatter.result({
  "duration": 302526300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 9
    }
  ],
  "location": "openAccountSteps.dropdown_Currency(String)"
});
formatter.result({
  "duration": 80127500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "duration": 49491600,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "duration": 24875800,
  "status": "passed"
});
formatter.after({
  "duration": 747330300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "TC-2 Verify pop up an alert is displayed when the user opens account",
  "description": "",
  "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open application in local Firefox Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Open Account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I chose \u0027Harry Potter\u0027 on dropdown Customer Name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I chose \u0027Dollar\u0027 on dropdown Currency",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the Process button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify pop up alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 6708313900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 1253931900,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 218162500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 9
    }
  ],
  "location": "openAccountSteps.i_chose_Harry_Potter_on_dropdown_Customer_Name(String)"
});
formatter.result({
  "duration": 10444200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //select[@id\u003d\u0027userSelect\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 96.0.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220126154723, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 22424, moz:profile: C:\\Users\\arian\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 35007f7f-635b-4427-b298-c9cb5fbdf7e1\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027userSelect\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat framework.WebCommands.selectDropDown(WebCommands.java:424)\r\n\tat page_objects.openAccountPage.selectName(openAccountPage.java:26)\r\n\tat step_definitions.openAccountSteps.i_chose_Harry_Potter_on_dropdown_Customer_Name(openAccountSteps.java:17)\r\n\tat ✽.And I chose \u0027Harry Potter\u0027 on dropdown Customer Name(TC2.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 9
    }
  ],
  "location": "openAccountSteps.dropdown_Currency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1172331100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "TC-2 Verify pop up an alert is displayed when the user opens account",
  "description": "",
  "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open application in local Edge Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Open Account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I chose \u0027Harry Potter\u0027 on dropdown Customer Name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I chose \u0027Dollar\u0027 on dropdown Currency",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the Process button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify pop up alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Edge",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 6019580800,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 1130179500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 1076210900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 9
    }
  ],
  "location": "openAccountSteps.i_chose_Harry_Potter_on_dropdown_Customer_Name(String)"
});
formatter.result({
  "duration": 13165800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027userSelect\u0027]\"}\n  (Session info: MicrosoftEdge\u003d98.0.1108.50)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 98.0.1108.50, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:7624}, msedge: {msedgedriverVersion: 98.0.1108.50 (4203d3deac4b8..., userDataDir: C:\\Users\\arian\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5840fc5089fe3e8ed43ac83c6fcd9a09\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027userSelect\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat framework.WebCommands.selectDropDown(WebCommands.java:424)\r\n\tat page_objects.openAccountPage.selectName(openAccountPage.java:26)\r\n\tat step_definitions.openAccountSteps.i_chose_Harry_Potter_on_dropdown_Customer_Name(openAccountSteps.java:17)\r\n\tat ✽.And I chose \u0027Harry Potter\u0027 on dropdown Customer Name(TC2.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 9
    }
  ],
  "location": "openAccountSteps.dropdown_Currency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 832359900,
  "status": "passed"
});
formatter.uri("TC3.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC-3 Verify user can delete a customer from the customer list",
  "description": "",
  "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Customer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click delete on one of the costumers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify the customer is deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 11,
      "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 12,
      "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 13,
      "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;3"
    },
    {
      "cells": [
        "Edge"
      ],
      "line": 14,
      "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "TC-3 Verify user can delete a customer from the customer list",
  "description": "",
  "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Customer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click delete on one of the costumers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify the customer is deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Chrome",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 2251858700,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 187269800,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_click_on_Customer()"
});
formatter.result({
  "duration": 176528600,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.delCustomer()"
});
formatter.result({
  "duration": 204120100,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_verify_the_customer_is_deleted()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.after({
  "duration": 764378800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "TC-3 Verify user can delete a customer from the customer list",
  "description": "",
  "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I open application in local Firefox Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Customer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click delete on one of the costumers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify the customer is deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 4556828300,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 1173556100,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_click_on_Customer()"
});
formatter.result({
  "duration": 237686200,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.delCustomer()"
});
formatter.result({
  "duration": 60438700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Browsing context has been discarded\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 96.0.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220126154723, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 14984, moz:profile: C:\\Users\\arian\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7ec01420-ccd1-41f3-ac98-beb8b9f89ac6\n*** Element info: {Using\u003dxpath, value\u003d//tbody/tr}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat page_objects.customersPage.delCustomer(customersPage.java:21)\r\n\tat step_definitions.customersSteps.delCustomer(customersSteps.java:16)\r\n\tat ✽.And I click delete on one of the costumers(TC3.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "customersSteps.i_verify_the_customer_is_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 523413900,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 96.0.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220126154723, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 14984, moz:profile: C:\\Users\\arian\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7ec01420-ccd1-41f3-ac98-beb8b9f89ac6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\r\n\tat driverWrapper.Web.quitPages(Web.java:116)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "TC-3 Verify user can delete a customer from the customer list",
  "description": "",
  "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I open application in local Edge Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Customer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click delete on one of the costumers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify the customer is deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Edge",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
