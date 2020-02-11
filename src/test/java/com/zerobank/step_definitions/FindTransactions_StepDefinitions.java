package com.zerobank.step_definitions;

import com.zerobank.pages.ZeroBankMainPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;


public class FindTransactions_StepDefinitions {
    @Given("the user accesses the Find Transactions tab")
    public void the_user_accesses_the_Find_Transactions_tab() {

      new ZeroBankMainPage().navigateToModule("Account Activity");
      new ZeroBankMainPage().FindTransactionsModule.click();
      BrowserUtils.waitFor(3);

    }

    @When("the user enter date range from {string} to {string}")
    public void the_user_enter_date_range_from_to(String dates , String dateTo) {

       new ZeroBankMainPage().dates.getText();
       new ZeroBankMainPage().dateTo.getText();
       BrowserUtils.waitFor(3);

    }

    @When("click search")
    public void click_search() {
        BrowserUtils.clickWithJS(new ZeroBankMainPage().findBtn);
        BrowserUtils.waitFor(3);
    }

    @Then("the result should be sorted by most resent date")
    public void the_result_should_be_sorted_by_most_resent_date() {
        BrowserUtils.waitFor(3);
        List<String> transactionResult = BrowserUtils.getElementsText(new ZeroBankMainPage().getShowTransactionsSubTitle);
        System.out.println("transactionResult = " + transactionResult);

    }

    @When("the user enters description {string}")
    public void the_user_enters_description(String input) {

        String actualInput = new ZeroBankMainPage().getDescription.getText();
        BrowserUtils.waitFor(3);
    }

    @Then("result table should only show descriptions containing {string}")
    public void result_table_should_only_show_descriptions_containing(String input) {

     List<String> gettingText = BrowserUtils.getElementsText(new ZeroBankMainPage().descriptionInfo);
        System.out.println("gettingText = " + gettingText);
        BrowserUtils.waitFor(3);
    }

    @Then("result table should only show description containing {string}")
    public void result_table_should_only_show_description_containing(String input) {

        String actualInput = new ZeroBankMainPage().getDescription.getText();
        BrowserUtils.waitFor(3);
        List<String> gettingText = BrowserUtils.getElementsText(new ZeroBankMainPage().descriptionInfo);
        System.out.println("gettingText = " + gettingText);


    }

}
