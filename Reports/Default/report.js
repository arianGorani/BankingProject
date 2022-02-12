$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("popUpAlertIsDisplayedWithMessage.feature");
formatter.feature({
  "line": 3,
  "name": "Pop up alert is displayed with message",
  "description": "",
  "id": "pop-up-alert-is-displayed-with-message",
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
  "id": "pop-up-alert-is-displayed-with-message;verify-pop-up-alert-is-displayed-with-message-\"customer-added-successfully-with-customer-id-:\"-when-user-add-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open application",
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
  "name": "I type Alan in First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type Smith in Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type 10123 in Post Code field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Add Costumer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify pop up alert is displayed with message \"Customer added successfully with customer id :\"",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSteps.openApplication()"
});
formatter.result({
  "duration": 3927701800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});