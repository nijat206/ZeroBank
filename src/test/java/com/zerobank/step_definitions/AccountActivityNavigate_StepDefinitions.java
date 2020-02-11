package com.zerobank.step_definitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.pages.ZeroBankMainPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

public class AccountActivityNavigate_StepDefinitions {
    @Given("the user is logged in")
    public void the_user_is_logged_in() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        BrowserUtils.waitFor(3);
        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("user_password");
        new LoginPage().login(username, password);

    }

    @When("the user clicks on	Savings	link on	the	Account	Summary	page")
    public void the_user_clicks_on_Savings_link_on_the_Account_Summary_page() {

        new ZeroBankMainPage().savingsLink.click();
        BrowserUtils.waitFor(3);

    }

    @Then("the Account Activity page should be displayed")
    public void the_Account_Activity_page_should_be_displayed() {
       new ZeroBankMainPage().navigateToModule("Account Activity");
       BrowserUtils.waitFor(3);
    }

    @Then("Account	drop down should have Savings selected")
    public void account_drop_down_should_have_Savings_selected() {
        Select select = new Select(new ZeroBankMainPage().dropDownMenu);
        BrowserUtils.waitFor(3);
        Assert.assertTrue( select.getFirstSelectedOption().isSelected());

    }


    @When("the user clicks on	Brokerage link on the Account Summary page")
    public void the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page() {
       new ZeroBankMainPage().BrokerageLink.click();
       BrowserUtils.waitFor(3);
    }

    @Then("Account	drop down should have Brokerage selected")
    public void account_drop_down_should_have_Brokerage_selected() {
        BrowserUtils.waitFor(3);
        Select select = new Select(new ZeroBankMainPage().dropDownMenu);
        Assert.assertTrue( select.getFirstSelectedOption().isSelected());

    }

    @When("the user clicks on	Checking link on the Account Summary page")
    public void the_user_clicks_on_Checking_link_on_the_Account_Summary_page() {
        new ZeroBankMainPage().CheckingLink.click();
        BrowserUtils.waitFor(3);
    }

    @Then("Account	drop down should have Checking selected")
    public void account_drop_down_should_have_Checking_selected() {
        BrowserUtils.waitFor(3);
        Select select = new Select(new ZeroBankMainPage().dropDownMenu);
        Assert.assertTrue(select.getFirstSelectedOption().isSelected());

    }
    @When("the user clicks on	Credit card	link on	the	Account	Summary	page")
    public void the_user_clicks_on_Credit_card_link_on_the_Account_Summary_page() {
        new ZeroBankMainPage().LoanLink.click();
        BrowserUtils.waitFor(3);

    }

    @Then("Account	drop down should have Credit Card selected")
    public void account_drop_down_should_have_Credit_Card_selected() {
        BrowserUtils.waitFor(3);
        Select select = new Select(new ZeroBankMainPage().dropDownMenu);
        Assert.assertTrue(select.getFirstSelectedOption().isSelected());
    }



}
