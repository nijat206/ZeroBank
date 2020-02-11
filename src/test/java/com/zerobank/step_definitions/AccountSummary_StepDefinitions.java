package com.zerobank.step_definitions;

import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.Then;

import java.util.List;

public class AccountSummary_StepDefinitions {
    @Then("the main page should have following account types")
    public void the_main_page_should_have_following_account_types(List<String> accountTypeList) {

        System.out.println("Account Type" + accountTypeList);
        System.out.println(accountTypeList.size());
        BrowserUtils.waitFor(3);

        }

    @Then("Credit Account table must have following feature")
    public void credit_Account_table_must_have_following_feature(List<String> creditAccountSubTitle) {
        BrowserUtils.waitFor(3);
        System.out.println("Credit account subTile"+creditAccountSubTitle);
        System.out.println(creditAccountSubTitle.size());




    }


}
