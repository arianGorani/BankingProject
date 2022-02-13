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
formatter.scenario({
  "line": 4,
  "name": "TC-2 Verify pop up an alert is displayed when the user opens account",
  "description": "",
  "id": "popup-verification;tc-2-verify-pop-up-an-alert-is-displayed-when-the-user-opens-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
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
  "location": "homepageSteps.openApplication()"
});
formatter.result({
  "duration": 3796392700,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 171880500,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_on_Open_Account()"
});
formatter.result({
  "duration": 166722600,
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
  "duration": 244105200,
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
  "duration": 88517100,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_click_the_Process_button()"
});
formatter.result({
  "duration": 50183300,
  "status": "passed"
});
formatter.match({
  "location": "openAccountSteps.i_verify_pop_up_alert_is_displayed()"
});
formatter.result({
  "duration": 25861700,
  "status": "passed"
});
formatter.after({
  "duration": 73529200,
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
formatter.scenario({
  "line": 3,
  "name": "TC-3 Verify user can delete a customer from the customer list",
  "description": "",
  "id": ";tc-3-verify-user-can-delete-a-customer-from-the-customer-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open the application",
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
  "location": "homepageSteps.openApplication()"
});
formatter.result({
  "duration": 1783869700,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 160416600,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_click_on_Customer()"
});
formatter.result({
  "duration": 163664200,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.delCustomer()"
});
formatter.result({
  "duration": 194637200,
  "status": "passed"
});
formatter.match({
  "location": "customersSteps.i_verify_the_customer_is_deleted()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.after({
  "duration": 72442900,
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
formatter.scenario({
  "line": 4,
  "name": "TC-5 Verify user has more than one account",
  "description": "",
  "id": ";tc-5-verify-user-has-more-than-one-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
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
  "location": "homepageSteps.openApplication()"
});
formatter.result({
  "duration": 1850626600,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.customLogin()"
});
formatter.result({
  "duration": 173360800,
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
  "duration": 191762000,
  "status": "passed"
});
formatter.match({
  "location": "customerLoginSteps.clickLoginBtn()"
});
formatter.result({
  "duration": 48937300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 63270800,
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
formatter.scenario({
  "line": 5,
  "name": "Verify pop up alert is displayed with message \"Customer added successfully with customer id :\" when user Add Customer",
  "description": "",
  "id": "tc-1-pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Bank Manager Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Add Customer",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Johnny\u0027 in first name field",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027Bravo\u0027 in last name field",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I type \u002710123\u0027 in Post Code field",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "I click on Add Costumer button",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "I verify pop up alert is displayed with message \u0027Customer added successfully with customer id :6\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSteps.openApplication()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1735862800,
=======
  "duration": 3927701800,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.clickButton()"
});
formatter.result({
  "duration": 166482100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.fill()"
});
formatter.result({
  "duration": 167441900,
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
  "duration": 230422500,
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
  "duration": 80957700,
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
  "duration": 91079800,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.mouseOver()"
});
formatter.result({
  "duration": 48182600,
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
  "duration": 3027887100,
  "status": "passed"
});
formatter.after({
  "duration": 69547600,
  "status": "passed"
});
});