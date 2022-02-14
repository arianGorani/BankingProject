
  Feature:
    Scenario Outline: TC-8 The last transaction is visible on the page

      Given I open application in local <Browser> Browser
      When I click on Customer Login
      And user in customer page, verify page name
      And I chose 'Harry Potter' customer from Dropdown
      And  I click Login
      And click deposit, enter an amount '90'
      And click Deposit button
      Then I verify message 'Deposit Successful' is visible on the page
      And click Transaction
      Then I verify the last transaction date and amount
      And user log out

      Examples:
        | Browser|
        | Chrome |
        | Firefox|
        | Edge   |
