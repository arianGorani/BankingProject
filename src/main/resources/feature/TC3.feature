@regression
Feature:
  Scenario: TC-3 Verify user can delete a customer from the customer list
      Given I open the application
      When I click on Bank Manager Login
      And I click on Customer
      And I click delete on one of the costumers
      Then I verify the customer is deleted