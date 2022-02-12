@regression

Feature: Pop up alert is displayed with message

  Scenario Outline: Verify pop up alert is displayed with message "Customer added successfully with customer id :" when user Add Customer
    Given I open application in local <Browser> Browser
    #When I click on Bank Manager Login
    #And I click on Add Customer
    #And I type Alan in First Name field
    #And I type Smith in Last name field
    #And I type 10123 in Post Code field
    #And I click on Add Costumer button
    #Then I verify pop up alert is displayed with message "Customer added successfully with customer id :"

    Examples:
      | Browser|
      | Chrome |
      | Firefox|