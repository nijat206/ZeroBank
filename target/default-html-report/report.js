$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivity.feature");
formatter.feature({
  "name": "the title should be Zero - Account activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Account Activity\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the title should be Zero - Account activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@AccountActivityPAge"
    }
  ]
});
formatter.step({
  "name": "the tile should contains \"Zero - Account Activity\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.the_tile_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the dropDown option should contains\" Savings\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_dropDown_option_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the show Transactions table should contains",
  "rows": [
    {
      "cells": [
        "Date",
        "Description",
        "Deposit",
        "Withdrawal"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_show_Transactions_table_should_contains(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DropDown option should have following options",
  "rows": [
    {
      "cells": [
        "Savings",
        "Checking",
        "Loan",
        "Credit Card",
        "Brokerage"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.dropdown_option_should_have_following_options(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating\tto specific accounts in\tAccounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Savings\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tSavings\tlink on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_clicks_on_Savings_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Savings selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.account_drop_down_should_have_Savings_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tBrokerage link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Brokerage selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.account_drop_down_should_have_Brokerage_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tChecking link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_clicks_on_Checking_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Checking selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.account_drop_down_should_have_Checking_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit\tCard\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tCredit card\tlink on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_clicks_on_Credit_card_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Credit Card selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.account_drop_down_should_have_Credit_Card_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AccountSummary.feature");
formatter.feature({
  "name": "Zero - Account Summary is visible",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Zero- Account Summary is visible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@GetTitleOfTheMainPage"
    }
  ]
});
formatter.step({
  "name": "the tile should contains \"Zero - Account Summary\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.the_tile_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the main page should have following account types",
  "rows": [
    {
      "cells": [
        "Cash Accounts",
        "Investment Accounts",
        "Credit Accounts",
        "Loan Accounts"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AccountSummary_StepDefinitions.the_main_page_should_have_following_account_types(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Credit Account table must have following feature",
  "rows": [
    {
      "cells": [
        "Account",
        "Credit Card",
        "Balance"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AccountSummary_StepDefinitions.credit_Account_table_must_have_following_feature(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search date range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter date range from \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_user_enter_date_range_from_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result should be sorted by most resent date",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_result_should_be_sorted_by_most_resent_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter date range from \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_user_enter_date_range_from_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigate_StepDefinitions.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search\tdescription",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_user_enters_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.result_table_should_only_show_descriptions_containing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"OFFICE\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.the_user_enters_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result table should only show description containing \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactions_StepDefinitions.result_table_should_only_show_description_containing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Only authorized user login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@positiveLogin"
    }
  ]
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the tile should contains \"Zero - Account Summary\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.the_tile_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user login with wrong credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@NegativeLogin"
    }
  ]
});
formatter.step({
  "name": "the user logs in with \"user12\" and \"user123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is not able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_is_not_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert message should displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.alert_message_should_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user login with blank credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user logs in with \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is not able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_is_not_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert message should displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.alert_message_should_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/NewPayee.feature");
formatter.feature({
  "name": "Add a new payee under pay bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add new payee tab",
  "keyword": "Given "
});
formatter.match({
  "location": "NewPayee_StepDefinition.add_new_payee_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates new payee using following information",
  "rows": [
    {
      "cells": [
        "Payee Name",
        "The Law Offices of Hyde, Price \u0026 Scarhks"
      ]
    },
    {
      "cells": [
        "Payee Address",
        "100 Same, st, Anytown, USA, 10001"
      ]
    },
    {
      "cells": [
        "Account",
        "Checking"
      ]
    },
    {
      "cells": [
        "Payee Details",
        "XYZ account"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NewPayee_StepDefinition.creates_new_payee_using_following_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message The new payee The LAw Offices of Hyde, price \u0026 Scharks was successfully created. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "NewPayee_StepDefinition.message_The_new_payee_The_LAw_Offices_of_Hyde_price_Scharks_was_successfully_created_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PayBills.feature");
formatter.feature({
  "name": "Zero - Pay Bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pages title is Zero - pay Bills",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the tile should contains \"Zero - Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.the_tile_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter related information",
  "keyword": "And "
});
formatter.match({
  "location": "PayBills_StepDefinitions.the_user_enter_related_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see the confirmations message",
  "keyword": "And "
});
formatter.match({
  "location": "PayBills_StepDefinitions.the_user_see_the_confirmations_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending Payment without incorrect way",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the tile should contains \"Zero - Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefinition.the_tile_should_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter wrong information",
  "keyword": "And "
});
formatter.match({
  "location": "PayBills_StepDefinitions.the_user_enter_wrong_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user get warning message",
  "keyword": "And "
});
formatter.match({
  "location": "PayBills_StepDefinitions.the_user_get_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase Foreign Currency",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Available currencies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following currencies should be available",
  "rows": [
    {
      "cells": [
        "Australia (dollar)"
      ]
    },
    {
      "cells": [
        "Canada (dollar)"
      ]
    },
    {
      "cells": [
        "Switzerland (franc)"
      ]
    },
    {
      "cells": [
        "China\t(yuan)"
      ]
    },
    {
      "cells": [
        "Denmark (krone)"
      ]
    },
    {
      "cells": [
        "Eurozone (euro)"
      ]
    },
    {
      "cells": [
        "Great Britain (pound)"
      ]
    },
    {
      "cells": [
        "Japan\t(yen)"
      ]
    },
    {
      "cells": [
        "Mexico (peso)"
      ]
    },
    {
      "cells": [
        "Norway (krone)"
      ]
    },
    {
      "cells": [
        "New Zealand (dollar)"
      ]
    },
    {
      "cells": [
        "Singapore\t(dollar)"
      ]
    },
    {
      "cells": [
        "Thailand (baht)"
      ]
    },
    {
      "cells": [
        "Sweden (krona)"
      ]
    },
    {
      "cells": [
        "Hong Kong (dollar)"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.following_currencies_should_be_available(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tires to calculate cost without selecting a currency",
  "keyword": "When "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.user_tires_to_calculate_cost_without_selecting_a_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not entering value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Pay Bills\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivity_StepDefinitions.the_user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tried to calculate cost without entering a value",
  "keyword": "When "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.user_tried_to_calculate_cost_without_entering_a_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrency_StepDefinitions.error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});