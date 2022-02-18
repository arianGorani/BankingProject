Feature:
    Scenario Outline: TC-10 Verify user cannot write letters on Amount to be withdrawn field

      Given I open application in local <Browser> Browser
      When I click on Customer Login
      And I chose 'Harry Potter' customer from Dropdown
      And  I click Login
      And click button 'Withdrawal'
      And enter string format 'AAAA'
      And click button to submit
      Then Message should popUp, 'Please fill out this field.' take a screenshot
      Then user logs out

      Examples:
        | Browser|
        | Chrome |
#        | Firefox|
#        | Edge   |