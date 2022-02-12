@regression

Feature: TC-1 Pop up alert is displayed with message

<<<<<<< HEAD
  Scenario: Verify pop up alert is displayed with message "Customer added successfully with customer id :" when user Add Customer
    Given I open the application
    When I click on Bank Manager Login
    And I click on Add Customer
    * I type 'Johnny' in first name field
    * I type 'Bravo' in last name field
    * I type '10123' in Post Code field
    * I click on Add Costumer button
    Then I verify pop up alert is displayed with message 'Customer added successfully with customer id :6'


=======
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
>>>>>>> 59305033f400ec1046690f362e43e035acb84d24
