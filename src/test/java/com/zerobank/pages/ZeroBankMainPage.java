package com.zerobank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ZeroBankMainPage  extends BasePage{
    @FindBy(xpath = "//h2[@class='board-header']")
    public List<String> AccountTypeList;

    @FindBy (xpath = "//h2[.='Cash Accounts']")

    public WebElement CashAccount;

    @FindBy(xpath = "//h2[.='Investment Accounts']")
    public WebElement InvestmentAccounts;

    @FindBy(xpath ="//h2[.='Credit Accounts']")
    public WebElement CreditAccounts;

    @FindBy(xpath = "//h2[.='Loan Accounts']")
    public WebElement LoanAccounts;

    @FindBy(xpath = "(//table)[3]//th")
    public List<WebElement> creditAccountSubTitle;

    @FindBy(id = "#account_activity_tab")
    public WebElement AccountActivity;

    @FindBy(css = "#aa_accountId")
    public WebElement dropDownMenu;

    @FindBy(xpath = "//option")
    public List<WebElement> MenuList;

    @FindBy(xpath = "//tr/th")
    public List<WebElement> ShowTransactionsSubTitle;

    @FindBy(xpath = "//div[@id='ui-tabs-1']")
    public WebElement ShowTransactionsTable;

    @FindBy(css = "#sp_payee")
    public WebElement PayBox;

    @FindBy(css = "#sp_account")
    public WebElement Account;

    @FindBy(xpath = "//input[@id='sp_amount']")
    public WebElement Amount;

    @FindBy(xpath = "//input[@id='sp_date']")
    public WebElement Date;

    @FindBy(xpath = "//input[@id='sp_description']")
    public WebElement Description;

    @FindBy(css = "#pay_saved_payees")
    public WebElement payBtn;

    @FindBy(xpath = "//span[.='The payment was successfully submitted.']")
    public WebElement confirmationMessage;

    @FindBy(xpath = "//div[@id='ui-tabs-1']")
    public WebElement PaymentTable;

    @FindBy (xpath = "(//a[.='Savings'])[1]")
    public WebElement savingsLink;

    @FindBy (xpath = "//a[.='Brokerage']")
    public WebElement BrokerageLink;

    @FindBy(xpath = "//a[.='Checking']")
    public WebElement CheckingLink;

    @FindBy(xpath = "//a[.='Credit Card']")
    public WebElement CreditCardLink;

    @FindBy(xpath = "//a[.='Loan']")
    public WebElement LoanLink;

    @FindBy(xpath = "//a[.='Find Transactions']")
    public WebElement FindTransactionsModule;

    @FindBy(css = "#aa_fromDate")
    public WebElement dates;

    @FindBy(css = "#aa_toDate")
    public WebElement dateTo;

    @FindBy(xpath = "//button")
    public WebElement findBtn;

    @FindBy(xpath = "(//table[@class='table table-condensed table-hover'])[2]//td")
    public List<WebElement> getShowTransactionsSubTitle;

    @FindBy(css = "#aa_description")
    public WebElement getDescription;

    @FindBy(css = "#filtered_transactions_for_account")
    public List<WebElement> descriptionInfo;

    @FindBy(xpath = "//a[.='Add New Payee']")
    public WebElement AddNewPayeeLink;

    @FindBy(xpath = "(//input[@type='submit'])[2]")
    public WebElement AddBtn;

    @FindBy(css = "div#alert_content")
    public WebElement alertMessage;

    @FindBy(xpath = "(//div[@class='board'])[2]//div[@class='control-group']")
    public List<WebElement> whoArePayingTable;

    @FindBy(css = "#np_new_payee_name")
    public WebElement payeeName;

    @FindBy(css = "#np_new_payee_address")
    public WebElement payeeAddress;

    @FindBy(css = "#np_new_payee_account")
    public  WebElement account;

    @FindBy(css = "#np_new_payee_details")
    public WebElement payeeDetails;

    @FindBy(css = "#add_new_payee")
    public WebElement getAddBtn;

    @FindBy(xpath = "//a[.='Purchase Foreign Currency']")
    public WebElement purchaseForeignCurrencyTab;

    @FindBy(css = "#pc_currency")
    public List<WebElement> currencyTable;

    @FindBy(css = "#pc_calculate_costs")
    public WebElement calculateCostBtn;

    @FindBy(css = "#pc_amount")
    public  WebElement amount1;







}
