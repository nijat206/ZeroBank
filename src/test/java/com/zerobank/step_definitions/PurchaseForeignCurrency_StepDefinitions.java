package com.zerobank.step_definitions;

import com.zerobank.pages.ZeroBankMainPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Alert;

import java.util.List;

public class PurchaseForeignCurrency_StepDefinitions {

    @Given("the user accesses the Purchase foreign currency cash tab")
    public void the_user_accesses_the_Purchase_foreign_currency_cash_tab() {
        BrowserUtils.waitFor(3);
        new ZeroBankMainPage().purchaseForeignCurrencyTab.click();

    }

    @Then("following currencies should be available")
    public void following_currencies_should_be_available(List<String> availableCurrency) {
       List<String> actualList = BrowserUtils.getElementsText(new ZeroBankMainPage().currencyTable);
        System.out.println("availableCurrency = " + availableCurrency);
        System.out.println("availableCurrency = " + availableCurrency.size());

        BrowserUtils.waitFor(3);

    }
    @When("user tires to calculate cost without selecting a currency")
    public void user_tires_to_calculate_cost_without_selecting_a_currency() {

        BrowserUtils.waitFor(3);
        new ZeroBankMainPage().calculateCostBtn.click();


    }

    @Then("error message should be displayed")
    public void error_message_should_be_displayed() {
        Alert alert = Driver.get().switchTo().alert();
        alert.getText();
        BrowserUtils.waitFor(3);
        System.out.println("alert = " + alert);
    }

    @When("user tried to calculate cost without entering a value")
    public void user_tried_to_calculate_cost_without_entering_a_value() {

        BrowserUtils.waitFor(3);
        new ZeroBankMainPage().calculateCostBtn.click();

    }




}