@regression
Feature:
  Scenario Outline: TC-3 Verify user can delete a customer from the customer list
      Given I open application in local <Browser> Browser
      When I click on Bank Manager Login
      And I click on Customer
      And I click delete on one of the costumers
      Then I verify the customer is deleted

      Examples:
          | Browser|
          | Chrome |
#          | Firefox|
#          | Edge   |