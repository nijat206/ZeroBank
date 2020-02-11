@wip
Feature: Add a new payee under pay bills

  Scenario: Add a new payee
    Given the user in the login page
    When the user logs in with "username" and "password"
    And the user navigates to "Pay Bills"
    Given Add new payee tab
    And creates new payee using following information

      | Payee Name    | The Law Offices of Hyde, Price & Scarhks |
      | Payee Address | 100 Same, st, Anytown, USA, 10001        |
      | Account       | Checking                                 |
      | Payee Details | XYZ account                              |

    Then message The new payee The LAw Offices of Hyde, price & Scharks was successfully created. should be displayed