@wip
Feature: Zero - Account Summary is visible
  Background:
    Given the user in the login page
    When the user logs in with "username" and "password"
    Then user should be able to login

    @GetTitleOfTheMainPage

    Scenario: Zero- Account Summary is visible
    And the tile should contains "Zero - Account Summary"
      And the main page should have following account types
      |	Cash Accounts| Investment Accounts| Credit Accounts| Loan Accounts|
      And Credit Account table must have following feature
      | Account | Credit Card| 	Balance|

    
    


