@regression
Feature:

  Scenario Outline: TC-5 Verify user has more than one account
    Given I open application in local <Browser> Browser
    When I click on Customer Login
    And I chose 'Hermoine Granger' customer from Dropdown
    And I click Login
    Then I verify the user account 'Hermoine Granger' isDisplayed

    Examples:
      | Browser|
      | Chrome |
      | Firefox|
      | Edge   |

