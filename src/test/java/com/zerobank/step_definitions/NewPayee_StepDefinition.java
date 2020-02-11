package com.zerobank.step_definitions;

import com.zerobank.pages.ZeroBankMainPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import java.util.Map;

public class NewPayee_StepDefinition {

    @Given("Add new payee tab")
    public void add_new_payee_tab() {

        new ZeroBankMainPage().AddNewPayeeLink.click();
        BrowserUtils.waitFor(3);
    }

    @Given("creates new payee using following information")
    public void creates_new_payee_using_following_information(Map<String, String> userData) {

        new ZeroBankMainPage().payeeName.sendKeys(userData.get("Payee Name"));
        new ZeroBankMainPage().payeeAddress.sendKeys(userData.get("Payee Address"));
        new ZeroBankMainPage().account.sendKeys(userData.get("Account"));
        new ZeroBankMainPage().payeeDetails.sendKeys(userData.get("Payee Details"));
        BrowserUtils.waitFor(5);
        new ZeroBankMainPage().getAddBtn.click();




    }

    @Then("message The new payee The LAw Offices of Hyde, price & Scharks was successfully created. should be displayed")
    public void message_The_new_payee_The_LAw_Offices_of_Hyde_price_Scharks_was_successfully_created_should_be_displayed() {

    String actualConfirmationMessage= new ZeroBankMainPage().alertMessage.getText();

        System.out.println("actualConfirmationMessage = " + actualConfirmationMessage);







    }
}
