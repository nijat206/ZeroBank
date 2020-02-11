package com.zerobank.step_definitions;


import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class Login_StepDefinition {

    @Given("the user in the login page")
    public void the_user_in_the_login_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }



    @When("the user logs in with {string} and {string}")
    public void the_user_logs_in_with_and(String username  , String password) {

        LoginPage loginPage = new LoginPage();
        loginPage.login(username, password);
        BrowserUtils.waitFor(3);
    }

    @Then("user should be able to login")
    public void user_should_be_able_to_login() {
        String actualUrl =  Driver.get().getCurrentUrl();
        String expectedUrl ="http://zero.webappsecurity.com/bank/account-summary.html";

        System.out.println("expectedUrl = " + expectedUrl);
        System.out.println("actualUrl = " + actualUrl);

        Assert.assertEquals(expectedUrl,actualUrl);
    }

    @Then("the tile should contains {string}")
    public void the_tile_should_contains(String expectedTitle) {

        System.out.println("expectedTitle = " + expectedTitle);

        Assert.assertTrue("Actual title"+Driver.get().getTitle(),Driver.get().getTitle().contains(expectedTitle));

    }

    @Then("the user is not able to login")
    public void the_user_is_not_able_to_login() {
        String actualUrl = Driver.get().getCurrentUrl();
        String expectedUrl = "http://zero.webappsecurity.com/bank/account-summary.html";

        Assert.assertNotEquals(expectedUrl, actualUrl);
    }

    @Then("Alert message should displayed")
    public void alert_message_should_displayed() {

        String actualWrongMessage = Driver.get().findElement(By.xpath("//div[@class='alert alert-error']")).getText();
        String expectedWrongMessage = "Login and/or password are wrong.";

        Assert.assertEquals(actualWrongMessage,expectedWrongMessage);




    }




}
