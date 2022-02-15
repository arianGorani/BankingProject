
  Feature:
    Scenario Outline: TC-8 The last transaction is visible on the page

      Given I open application in local <Browser> Browser
      When I click on Customer Login
      And user in customer page, verify page name
      And I chose 'Harry Potter' customer from Dropdown
      And  I click Login
      And click button 'Deposit'
      And enter an amount '90'
      And click button to submit
      Then I verify message 'Deposit Successful' is visible on the page
      And click button 'Transaction'
      Then I verify the last transaction date and amount
      And user logs out

      Examples:
        | Browser|
        | Chrome |
        | Firefox|
        | Edge   |
