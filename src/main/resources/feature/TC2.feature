@regression
Feature: PopUp verification

Scenario: TC-2 Verify pop up an alert is displayed when the user opens account
      Given I open the application
      When I click on Bank Manager Login
      And I click on Open Account
      And I chose 'Harry Potter' on dropdown Customer Name
      And I chose 'Dollar' on dropdown Currency
      And I click the Process button
      Then I verify pop up alert is displayed