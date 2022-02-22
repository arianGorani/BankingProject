Feature:
  Scenario: TC-11 Verify customer can deposit money successfully
    When I click on Customer Login
    And I chose 'Harry Potter' customer from Dropdown
    And I click Login
    And click button 'Deposit'
    And enter an amount '200'
    And click button to submit
    Then I verify message 'Deposit Successful' is visible on the page
