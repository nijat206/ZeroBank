@wip
Feature:  Zero - Pay Bills
  Background:
    Given the user in the login page
    When the user logs in with "username" and "password"
    Then user should be able to login
    And the user navigates to "Pay Bills"

    Scenario: Pages title is Zero - pay Bills
      And the tile should contains "Zero - Pay Bills"
        And the user enter related information
        And the user see the confirmations message

    Scenario: Sending Payment without incorrect way
      And the tile should contains "Zero - Pay Bills"
      And the user enter wrong information
    And the user get warning message














