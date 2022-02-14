
  Feature:
    Scenario Outline: TC-10 User e withdrawal

      Given I open application in local <Browser> Browser
      When I click on Customer Login
      And I chose 'Harry Potter' customer from Dropdown
      And  I click Login
      And click withdrawal, enter string format 'AAAA'
      And click withdraw button
      Then Message should popUp, 'Please fill out this field.' take a screenshot
      Then user log out

      Examples:
        | Browser|
        | Chrome |
        | Firefox|
        | Edge   |