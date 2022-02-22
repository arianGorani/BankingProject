Feature:
  Scenario: TC-4 Verify customer cannot withdrawal more than the customer balance
    When I click on Customer Login
    And I chose 'Hermoine Granger' customer from Dropdown
    And I click Login
    And click button 'Deposit'
    And enter an amount '1000'
    And click button to submit
    And click button 'Withdrawal'
    And enter an amount '1100'
    And click button to submit
    Then I verify 'Transaction Failed. You cannot withdraw amount more than the balance.' message is displayed
