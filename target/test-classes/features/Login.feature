@wip
Feature: Login
Background:
  Given the user in the login page

  @positiveLogin
  Scenario: Only authorized user login

    When  the user logs in with "username" and "password"
    Then  user should be able to login
    And   the tile should contains "Zero - Account Summary"

  @NegativeLogin
    Scenario:  The user login with wrong credential
    When the user logs in with "user12" and "user123456"
    Then the user is not able to login
    And Alert message should displayed

    Scenario:  The user login with blank credential
      When the user logs in with "" and ""
      Then  the user is not able to login
      And Alert message should displayed








