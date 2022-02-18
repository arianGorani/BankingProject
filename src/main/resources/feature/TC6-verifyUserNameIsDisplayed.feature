@regression
Feature: TC-6
  Scenario Outline: TC-6 Verify the user name is displayed

    Given I open application in local <Browser> Browser
    When I click on Customer Login
    And user in customer page, verify page name
    And I chose 'Hermoine Granger' customer from Dropdown
    And  I click Login
    Then I verify name on-page is the same as login 'Hermoine Granger'
    Then user logs out

    Examples:
      | Browser|
      | Chrome |
      | Firefox|
      | Edge   |
