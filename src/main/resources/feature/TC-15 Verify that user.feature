Feature:
  Scenario: TC-15 Verify that user can look for customers by entering their name in search box.
    When I click on Bank Manager Login
    And I click on Add Customer
    And I chose 'Harry Potter' on dropdown Customer Name
    And I chose 'Dollar' on dropdown Currency
    And I click the Process button
    And user logs out