package com.zerobank.step_definitions;

import com.zerobank.pages.ZeroBankMainPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

public class PayBills_StepDefinitions {

    @Then("the user enter related information")
    public void the_user_enter_related_information() {
        Select select = new Select(new ZeroBankMainPage().PayBox);
        select.selectByIndex(2);

        Select select1 = new Select(new ZeroBankMainPage().Account);
        select1.selectByIndex(2);
        new ZeroBankMainPage().Amount.sendKeys("1200");
        new ZeroBankMainPage().Date.sendKeys("2020-01-10");
        new ZeroBankMainPage().Description.sendKeys("Payment is done");



    }

    @Then("the user see the confirmations message")
    public void the_user_see_the_confirmations_message() {
      BrowserUtils.clickWithJS(new ZeroBankMainPage().payBtn);
      BrowserUtils.waitFor(3);
        System.out.println(new ZeroBankMainPage().confirmationMessage.getText());

    }
    @Then("the user enter wrong information")
    public void the_user_enter_wrong_information() {

        Select select = new Select(new ZeroBankMainPage().PayBox);
        select.selectByIndex(2);

        Select select1 = new Select(new ZeroBankMainPage().Account);
        select1.selectByIndex(2);
        new ZeroBankMainPage().Amount.sendKeys("1200");
        new ZeroBankMainPage().Description.sendKeys("Payment is done");
    }
    @Then("the user get warning message")
    public void the_user_get_warning_message() {


        BrowserUtils.clickWithJS(new ZeroBankMainPage().payBtn);
        BrowserUtils.waitFor(3);
        String message = Driver.get().findElement(By.cssSelector("#sp_date")).getAttribute("validationMessage");
        System.out.println("message = " + message);





    }

}
