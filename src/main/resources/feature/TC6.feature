@regression
Feature:
  Scenario: Verify the user name is displayed

    Given I open application in local <Browser> Browser
    When I click on Customer Login
    And user in customer page, verify page name
    And I chose 'Harry Potter' customer from Dropdown
    And  I click Login
    Then I verify name on-page is the same as login
    Then user logs out