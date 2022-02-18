$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC1-popUpAlertIsDisplayedWithMessage.feature");
formatter.feature({
  "line": 2,
  "name": "TC-1 Pop up alert is displayed with message",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message",
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
  "name": "Verify pop up alert is displayed with message \"Customer added successfully with customer id :\" when user Add Customer",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer",
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
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type \u0027Johnny\u0027 in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Bravo\u0027 in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u002710123\u0027 in Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify pop up alert is displayed with message \u0027Customer added successfully with customer id :6\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 17,
      "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 18,
      "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Verify pop up alert is displayed with message \"Customer added successfully with customer id :\" when user Add Customer",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;2",
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
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type \u0027Johnny\u0027 in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Bravo\u0027 in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u002710123\u0027 in Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify pop up alert is displayed with message \u0027Customer added successfully with customer id :6\u0027",
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
  "duration": 6015387000,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 286348500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.fill()"
});
formatter.result({
  "duration": 191189800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnny",
      "offset": 8
    }
  ],
  "location": "homepageSteps.fillName(String)"
});
formatter.result({
  "duration": 290575700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bravo",
      "offset": 8
    }
  ],
  "location": "homepageSteps.fillLast(String)"
});
formatter.result({
  "duration": 185305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10123",
      "offset": 8
    }
  ],
  "location": "homepageSteps.fillPost(int)"
});
formatter.result({
  "duration": 175739500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.mouseOver()"
});
formatter.result({
  "duration": 94513000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 49
    }
  ],
  "location": "homepageSteps.verifyAdding(String)"
});
formatter.result({
  "duration": 1180777900,
  "status": "passed"
});
formatter.uri("TC12-Take screenshot of popup alert..feature");
formatter.feature({
  "line": 3,
  "name": "TC-12",
  "description": "",
  "id": "tc-12",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Take screenshot of popup alert when we have duplicate values",
  "description": "",
  "id": "tc-12;take-screenshot-of-popup-alert-when-we-have-duplicate-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type Zeshan in the First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type Haider in Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type 10465 in the Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "PopUp is displayed, Dublicate value",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "tc-12;take-screenshot-of-popup-alert-when-we-have-duplicate-values;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 18,
      "id": "tc-12;take-screenshot-of-popup-alert-when-we-have-duplicate-values;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 19,
      "id": "tc-12;take-screenshot-of-popup-alert-when-we-have-duplicate-values;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Take screenshot of popup alert when we have duplicate values",
  "description": "",
  "id": "tc-12;take-screenshot-of-popup-alert-when-we-have-duplicate-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type Zeshan in the First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type Haider in Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type 10465 in the Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "PopUp is displayed, Dublicate value",
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
  "duration": 2310461900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 201936000,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.fill()"
});
formatter.result({
  "duration": 194043700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zeshan",
      "offset": 7
    }
  ],
  "location": "bankManagerLoginSteps.typeN(String)"
});
formatter.result({
  "duration": 220090300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Haider",
      "offset": 7
    }
  ],
  "location": "bankManagerLoginSteps.typeL(String)"
});
formatter.result({
  "duration": 87188800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10465",
      "offset": 7
    }
  ],
  "location": "bankManagerLoginSteps.typeZip(int)"
});
formatter.result({
  "duration": 135284000,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.mouseOver()"
});
formatter.result({
  "duration": 91011500,
  "status": "passed"
});
formatter.match({
  "location": "bankManagerLoginSteps.popupIsDisplayedDublicateValue()"
});
formatter.result({
  "duration": 2257837600,
  "status": "passed"
});
formatter.uri("TC13-Verify pop up alert is displayed.feature");
formatter.feature({
  "line": 2,
  "name": "TC-13",
  "description": "",
  "id": "tc-13",
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
  "name": "Verify pop up alert is displayed with message \"Please fill out this field\" when you do not enter last name",
  "description": "",
  "id": "tc-13;verify-pop-up-alert-is-displayed-with-message-\"please-fill-out-this-field\"-when-you-do-not-enter-last-name",
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
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type Zeshan in the First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027  \u0027 in Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type 10465 in the Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "PopUp is displayed with message Please Fill out this field take screenshot",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "tc-13;verify-pop-up-alert-is-displayed-with-message-\"please-fill-out-this-field\"-when-you-do-not-enter-last-name;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 15,
      "id": "tc-13;verify-pop-up-alert-is-displayed-with-message-\"please-fill-out-this-field\"-when-you-do-not-enter-last-name;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 16,
      "id": "tc-13;verify-pop-up-alert-is-displayed-with-message-\"please-fill-out-this-field\"-when-you-do-not-enter-last-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify pop up alert is displayed with message \"Please fill out this field\" when you do not enter last name",
  "description": "",
  "id": "tc-13;verify-pop-up-alert-is-displayed-with-message-\"please-fill-out-this-field\"-when-you-do-not-enter-last-name;;2",
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
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type Zeshan in the First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027  \u0027 in Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type 10465 in the Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "PopUp is displayed with message Please Fill out this field take screenshot",
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
  "duration": 2406208100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 235614900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.fill()"
});
formatter.result({
  "duration": 191562300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zeshan",
      "offset": 7
    }
  ],
  "location": "bankManagerLoginSteps.typeN(String)"
});
formatter.result({
  "duration": 271935900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027  \u0027",
      "offset": 7
    }
  ],
  "location": "bankManagerLoginSteps.typeL(String)"
});
formatter.result({
  "duration": 122155100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10465",
      "offset": 7
    }
  ],
  "location": "bankManagerLoginSteps.typeZip(int)"
});
formatter.result({
  "duration": 188903900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.mouseOver()"
});
formatter.result({
  "duration": 110448500,
  "status": "passed"
});
formatter.match({
  "location": "bankManagerLoginSteps.popupIsDisplayedWithMessageTakeScreenshot()"
});
formatter.result({
  "duration": 2277974300,
  "status": "passed"
});
formatter.uri("TC2-popUpAlertIsDisplayedWhenUserOpensAccount.feature");
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
  "duration": 2720864600,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 214141300,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 190904900,
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
  "duration": 331407000,
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
  "duration": 152964000,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "duration": 106171200,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "duration": 197452500,
  "status": "passed"
});
formatter.uri("TC3-userCanDeleteCustomerFromlist.feature");
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
  "duration": 2467417900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 223529400,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_click_on_Customer()"
});
formatter.result({
  "duration": 207627000,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.delCustomer()"
});
formatter.result({
  "duration": 249977200,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_verify_the_customer_is_deleted()"
});
formatter.result({
  "duration": 136899300,
  "status": "passed"
});
formatter.uri("TC5-userHasMoreThanOneAccount.feature");
formatter.feature({
  "line": 2,
  "name": "TC-5 Verify user has more than one account",
  "description": "",
  "id": "tc-5-verify-user-has-more-than-one-account",
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
  "name": "Verify user has more than one account",
  "description": "",
  "id": "tc-5-verify-user-has-more-than-one-account;verify-user-has-more-than-one-account",
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
  "name": "I click on Customer Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I chose \u0027Hermoine Granger\u0027 customer from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Then I verify they are more than one account under Hermoine Granger account",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "tc-5-verify-user-has-more-than-one-account;verify-user-has-more-than-one-account;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 13,
      "id": "tc-5-verify-user-has-more-than-one-account;verify-user-has-more-than-one-account;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 14,
      "id": "tc-5-verify-user-has-more-than-one-account;verify-user-has-more-than-one-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user has more than one account",
  "description": "",
  "id": "tc-5-verify-user-has-more-than-one-account;verify-user-has-more-than-one-account;;2",
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
  "name": "I click on Customer Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I chose \u0027Hermoine Granger\u0027 customer from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Then I verify they are more than one account under Hermoine Granger account",
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
  "duration": 2405690300,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.customLogin()"
});
formatter.result({
  "duration": 241651900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 9
    }
  ],
  "location": "customerLoginSteps.findName(String)"
});
formatter.result({
  "duration": 240529500,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.clickLoginBtn()"
});
formatter.result({
  "duration": 92155400,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.verifyUserHasMoreThanOneAcc()"
});
formatter.result({
  "duration": 522876700,
  "status": "passed"
});
formatter.uri("TC6-verifyUserNameIsDisplayed.feature");
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
  "name": "TC-6 Verify the user name is displayed",
  "description": "",
  "id": ";tc-6-verify-the-user-name-is-displayed",
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
  "name": "I click on Customer Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user in customer page, verify page name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I chose \u0027Hermoine Granger\u0027 customer from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify name on-page is the same as login \u0027Hermoine Granger\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logs out",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": ";tc-6-verify-the-user-name-is-displayed;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 14,
      "id": ";tc-6-verify-the-user-name-is-displayed;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 15,
      "id": ";tc-6-verify-the-user-name-is-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "TC-6 Verify the user name is displayed",
  "description": "",
  "id": ";tc-6-verify-the-user-name-is-displayed;;2",
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
  "name": "I click on Customer Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user in customer page, verify page name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I chose \u0027Hermoine Granger\u0027 customer from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify name on-page is the same as login \u0027Hermoine Granger\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logs out",
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
  "duration": 2595183900,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.customLogin()"
});
formatter.result({
  "duration": 212062600,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.user_in_customer_page_verify_page_name()"
});
formatter.result({
  "duration": 8951500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 9
    }
  ],
  "location": "customerLoginSteps.findName(String)"
});
formatter.result({
  "duration": 221312900,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.clickLoginBtn()"
});
formatter.result({
  "duration": 77022500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 44
    }
  ],
  "location": "customerLoginSteps.i_verify_name_on_page_is_the_same_as_login(String)"
});
formatter.result({
  "duration": 173857900,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.user_logs_out()"
});
formatter.result({
  "duration": 145684200,
  "status": "passed"
});
formatter.uri("TC7-userMakesDepositAndVerifiesAmount.feature");
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
  "name": "TC-7 The user makes a deposit and verifies the amount",
  "description": "",
  "id": ";tc-7-the-user-makes-a-deposit-and-verifies-the-amount",
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
  "name": "I click on Customer Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I chose \u0027Harry Potter\u0027 customer from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click button \u0027Deposit\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter an amount \u002790\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click button to submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify message \u0027Deposit Successful\u0027 is visible on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user logs out",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": ";tc-7-the-user-makes-a-deposit-and-verifies-the-amount;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 16,
      "id": ";tc-7-the-user-makes-a-deposit-and-verifies-the-amount;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 17,
      "id": ";tc-7-the-user-makes-a-deposit-and-verifies-the-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "TC-7 The user makes a deposit and verifies the amount",
  "description": "",
  "id": ";tc-7-the-user-makes-a-deposit-and-verifies-the-amount;;2",
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
  "name": "I click on Customer Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I chose \u0027Harry Potter\u0027 customer from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click button \u0027Deposit\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter an amount \u002790\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click button to submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify message \u0027Deposit Successful\u0027 is visible on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user logs out",
  "keyword": "And "
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
  "duration": 2298256300,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.customLogin()"
});
formatter.result({
  "duration": 221777600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 9
    }
  ],
  "location": "customerLoginSteps.findName(String)"
});
formatter.result({
  "duration": 223546300,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.clickLoginBtn()"
});
formatter.result({
  "duration": 77974100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 14
    }
  ],
  "location": "customerLoginSteps.selectBtn(String)"
});
formatter.result({
  "duration": 183931200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 17
    }
  ],
  "location": "customerLoginSteps.click_deposit(int)"
});
formatter.result({
  "duration": 240620600,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.btnSUbmit()"
});
formatter.result({
  "duration": 73664400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 18
    }
  ],
  "location": "customerLoginSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 1037233400,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.user_logs_out()"
});
formatter.result({
  "duration": 132674700,
  "status": "passed"
});
});