@regression
Feature:TC-9
    Scenario Outline: TC-9 Verify user can make a withdrawal

      Given I open application in local <Browser> Browser
      When I click on Customer Login
      And I chose 'Harry Potter' customer from Dropdown
      And  I click Login
      And click button 'Withdrawal'
      And enter an amount '90'
      And click button to submit
      Then user logs out

      Examples:
        | Browser|
        | Chrome |
        | Firefox|
        | Edge   |