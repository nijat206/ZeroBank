@wip
Feature: Find Transactions in Account Activity
  Background:
    Given the user is logged in

  Scenario:	Search date range
    Given the user accesses the Find Transactions tab
    When the user enter date range from "2012-09-01" to "2012-09-06"
    And click search
    And the result should be sorted by most resent date
    When the user enter date range from "2012-09-02" to "2012-09-06"

  Scenario:	Search	description
    Given the user accesses the Find Transactions tab
    When the user enters description "ONLINE"
    And click search
    Then result table should only show descriptions containing "ONLINE"
    When the user enters description "OFFICE"
    And click search
    Then result table should only show description containing "OFFICE"







