package com.zerobank.step_definitions;
import com.zerobank.pages.ZeroBankMainPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Then;

import java.util.List;

public class AccountActivity_StepDefinitions {

    @Then("the user navigates to {string}")
    public void the_user_navigates_to(String module) {


        ZeroBankMainPage zeroBankMainPage = new ZeroBankMainPage();
        zeroBankMainPage.navigateToModule(module);
        BrowserUtils.waitFor(3);

        String actualTitle = Driver.get().getTitle();
    }
    @Then("the dropDown option should contains{string}")
    public void the_dropDown_option_should_contains(String dropDownMenu) {
        System.out.println("dropDownMenu = " + dropDownMenu);

    }

    @Then("the show Transactions table should contains")
    public void the_show_Transactions_table_should_contains(List<String> ShowTransactionsSubTitle) {
        System.out.println("ShowTransactionsSubTitle = " + ShowTransactionsSubTitle);

    }

    @Then("DropDown option should have following options")
    public void dropdown_option_should_have_following_options(List<String> MenuList ) {
        System.out.println("MenuList = " + MenuList);
    }




}
