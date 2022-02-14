
  Feature:
    Scenario Outline: TC-9 User make a withdrawal

      Given I open application in local <Browser> Browser
      When I click on Customer Login
      And I chose 'Harry Potter' customer from Dropdown
      And  I click Login
      And click withdrawal, enter an amount '90'
      And click withdraw button
      Then user log out

      Examples:
        | Browser|
        | Chrome |
        | Firefox|
        | Edge   |