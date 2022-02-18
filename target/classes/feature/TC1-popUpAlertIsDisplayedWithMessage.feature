@regression
Feature: TC-1 Pop up alert is displayed with message

  Scenario Outline: Verify pop up alert is displayed with message "Customer added successfully with customer id :" when user Add Customer
    Given I open application in local <Browser> Browser
    When I click on Bank Manager Login
    And I click on Add Customer
    And I type 'Johnny' in first name field
    And I type 'Bravo' in last name field
    And I type '10123' in Post Code field
    And I click on Add Costumer button
    Then I verify pop up alert is displayed with message 'Customer added successfully with customer id :6'



    Examples:
      | Browser|
      | Chrome |
#      | Firefox|
#      | Edge   |

