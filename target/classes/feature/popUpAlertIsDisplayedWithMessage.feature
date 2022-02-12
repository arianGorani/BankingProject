@regression

Feature: TC-1 Pop up alert is displayed with message

  Scenario: Verify pop up alert is displayed with message "Customer added successfully with customer id :" when user Add Customer
    Given I open the application
    When I click on Bank Manager Login
    And I click on Add Customer
    * I type 'Johnny' in first name field
    * I type 'Bravo' in last name field
    * I type '10123' in Post Code field
    * I click on Add Costumer button
    Then I verify pop up alert is displayed with message 'Customer added successfully with customer id :6'


