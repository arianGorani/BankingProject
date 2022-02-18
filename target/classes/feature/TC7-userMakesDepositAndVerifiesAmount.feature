@regression
Feature:
  Scenario Outline: TC-7 The user makes a deposit and verifies the amount

    Given I open application in local <Browser> Browser
    When I click on Customer Login
    And I chose 'Harry Potter' customer from Dropdown
    And I click Login
    And click button 'Deposit'
    And enter an amount '90'
    And click button to submit
    Then I verify message 'Deposit Successful' is visible on the page
    And user logs out

    Examples:
      | Browser|
      | Chrome |
#      | Firefox|
#      | Edge   |
