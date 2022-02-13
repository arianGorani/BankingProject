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
  "duration": 3860723400,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 172293300,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 141256300,
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
  "duration": 256771400,
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
  "duration": 72847500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "duration": 49015000,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "duration": 22840000,
  "status": "passed"
});
formatter.after({
  "duration": 78232300,
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
  "duration": 4791103100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 1218510000,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 128146000,
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
  "duration": 254213700,
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
  "duration": 249207500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "duration": 100751500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "duration": 35655600,
  "status": "passed"
});
formatter.after({
  "duration": 1016696500,
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
  "duration": 1890858500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 152523500,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_click_on_Customer()"
});
formatter.result({
  "duration": 255452100,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.delCustomer()"
});
formatter.result({
  "duration": 233809700,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_verify_the_customer_is_deleted()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.after({
  "duration": 64913700,
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
  "duration": 4093988700,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 1191874300,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_click_on_Customer()"
});
formatter.result({
  "duration": 160715100,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.delCustomer()"
});
formatter.result({
  "duration": 249528100,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_verify_the_customer_is_deleted()"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.after({
  "duration": 1012041000,
  "status": "passed"
});
formatter.uri("TC5.feature");
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
  "line": 4,
  "name": "TC-5 Verify user has more than one account",
  "description": "",
  "id": ";tc-5-verify-user-has-more-than-one-account",
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
  "name": "I verify the user account \u0027Hermoine Granger\u0027 isDisplayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": ";tc-5-verify-user-has-more-than-one-account;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 12,
      "id": ";tc-5-verify-user-has-more-than-one-account;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 13,
      "id": ";tc-5-verify-user-has-more-than-one-account;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 14,
      "id": ";tc-5-verify-user-has-more-than-one-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "TC-5 Verify user has more than one account",
  "description": "",
  "id": ";tc-5-verify-user-has-more-than-one-account;;2",
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
  "name": "I verify the user account \u0027Hermoine Granger\u0027 isDisplayed",
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
  "duration": 1871932300,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.customLogin()"
});
formatter.result({
  "duration": 181084800,
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
  "duration": 202277500,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.clickLoginBtn()"
});
formatter.result({
  "duration": 46427100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 80161700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "TC-5 Verify user has more than one account",
  "description": "",
  "id": ";tc-5-verify-user-has-more-than-one-account;;3",
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
  "name": "I verify the user account \u0027Hermoine Granger\u0027 isDisplayed",
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
  "duration": 4534410600,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.customLogin()"
});
formatter.result({
  "duration": 1177686800,
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
  "duration": 241186000,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.clickLoginBtn()"
});
formatter.result({
  "duration": 249033300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1066202400,
  "status": "passed"
});
formatter.uri("popUpAlertIsDisplayedWithMessage.feature");
formatter.feature({
  "line": 3,
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
  "line": 6,
  "name": "Verify pop up alert is displayed with message \"Customer added successfully with customer id :\" when user Add Customer",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer",
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
  "name": "I type \u0027Johnny\u0027 in first name field",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Bravo\u0027 in last name field",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "I type \u002710123\u0027 in Post Code field",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Costumer button",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "I verify pop up alert is displayed with message \u0027Customer added successfully with customer id :6\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 19,
      "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 20,
      "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 21,
      "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
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
  "name": "I type \u0027Johnny\u0027 in first name field",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Bravo\u0027 in last name field",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "I type \u002710123\u0027 in Post Code field",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Costumer button",
  "keyword": "* "
});
formatter.step({
  "line": 14,
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
  "duration": 2765421100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 163655400,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.fill()"
});
formatter.result({
  "duration": 174451700,
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
  "duration": 214226900,
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
  "duration": 94957500,
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
  "duration": 105630300,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.mouseOver()"
});
formatter.result({
  "duration": 52805600,
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
  "duration": 3017354900,
  "status": "passed"
});
formatter.after({
  "duration": 84884000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify pop up alert is displayed with message \"Customer added successfully with customer id :\" when user Add Customer",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer;;3",
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
  "line": 7,
  "name": "I open application in local Firefox Browser",
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
  "name": "I type \u0027Johnny\u0027 in first name field",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Bravo\u0027 in last name field",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "I type \u002710123\u0027 in Post Code field",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Costumer button",
  "keyword": "* "
});
formatter.step({
  "line": 14,
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
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 4201041300,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 1202675200,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.fill()"
});
formatter.result({
  "duration": 125767700,
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
  "duration": 34596300,
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
  "duration": 29222300,
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
  "duration": 30349000,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.mouseOver()"
});
formatter.result({
  "duration": 77192900,
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
  "duration": 3040872100,
  "status": "passed"
});
formatter.after({
  "duration": 1027904400,
  "status": "passed"
});
});