Feature:
  Scenario Outline: Verify pop up alert is displayed with message "Please fill out this field" when you do not enter last name

    Given I open application in local <Browser> Browser
    When I click on Bank Manager Login
    And I click on Add Customer
    And I type Zeshan in the First Name field
    And I type '  ' in Last name field
    And I type 10465 in the Post Code field
    And I click on Add Costumer button
    Then PopUp is displayed with message Please Fill out this field take screenshot


    Examples:
      | Browser|
      | Chrome |
      | Firefox|
      | Edge   |