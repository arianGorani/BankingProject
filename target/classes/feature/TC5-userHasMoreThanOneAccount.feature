@regression
Feature: TC-5 Verify user has more than one account

  Scenario Outline: Verify user has more than one account
    Given I open application in local <Browser> Browser
    When I click on Customer Login
    And I chose 'Hermoine Granger' customer from Dropdown
    And I click Login
    Then Then I verify they are more than one account under Hermoine Granger account


    Examples:
      | Browser|
      | Chrome |
#      | Firefox|
#      | Edge   |

