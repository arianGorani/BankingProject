
@regression
Feature: TC-12

  Scenario Outline: Take screenshot of popup alert when we have duplicate values

    Given I open application in local <Browser> Browser
    When I click on Bank Manager Login
    And I click on Add Customer
    And I type Zeshan in the First Name field
    And I type Haider in Last name field
    And I type 10465 in the Post Code field
    And I click on Add Costumer button
    Then PopUp is displayed, Dublicate value


    Examples:
      | Browser|
      | Chrome |
#      | Firefox|
#      | Edge   |