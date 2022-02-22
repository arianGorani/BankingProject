Feature:
  Scenario: TC-14 Verify "log out button is working" after selecting customer name.
    When I click on Customer Login
    And  I chose 'Harry Potter' customer from Dropdown
    And  I click Login
    And user logs out