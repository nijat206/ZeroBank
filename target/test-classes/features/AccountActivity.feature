@wip
  Feature: the title should be Zero - Account activity

    Background:
      Given the user in the login page
      When the user logs in with "username" and "password"
      Then user should be able to login
      And the user navigates to "Account Activity"
      @AccountActivityPAge

      Scenario: the title should be Zero - Account activity
        And the tile should contains "Zero - Account Activity"
        And the dropDown option should contains" Savings"
        And the show Transactions table should contains
          |Date	|Description|	Deposit |	Withdrawal|
        And DropDown option should have following options
        |Savings | Checking| Loan | Credit Card | Brokerage|
















