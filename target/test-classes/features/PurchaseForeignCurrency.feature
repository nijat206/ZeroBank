@wip
  Feature:  Purchase Foreign Currency

    Scenario: Available currencies
      Given the user in the login page
      When the user logs in with "username" and "password"
      And the user navigates to "Pay Bills"
      Given the user accesses the Purchase foreign currency cash tab
      Then following currencies should be available

        | Australia (dollar)    |
        | Canada (dollar)       |
        | Switzerland (franc)   |
        | China	(yuan)          |
        | Denmark (krone)       |
        | Eurozone (euro)       |
        | Great Britain (pound) |
        | Japan	(yen)           |
        | Mexico (peso)         |
        | Norway (krone)        |
        | New Zealand (dollar)  |
        | Singapore	(dollar)    |
        | Thailand (baht)       |
        | Sweden (krona)        |
        | Hong Kong (dollar)    |

    Scenario: Error message for not selecting currency
      Given the user in the login page
      When the user logs in with "username" and "password"
      And the user navigates to "Pay Bills"
      Given the user accesses the Purchase foreign currency cash tab
      When user tires to calculate cost without selecting a currency
      Then error message should be displayed
    @wip
      Scenario: Error message for not entering value
        Given the user in the login page
        When the user logs in with "username" and "password"
        And the user navigates to "Pay Bills"
        Given the user accesses the Purchase foreign currency cash tab
        When user tried to calculate cost without entering a value
        Then error message should be displayed

