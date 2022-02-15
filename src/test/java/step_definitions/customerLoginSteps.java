package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page_objects.customerLoginPage;

public class customerLoginSteps {

    customerLoginPage cusLogin = new customerLoginPage();

    @When("^I click on Customer Login$")
    public void  customLogin(){
        cusLogin.clickCust();
    }
    @And("^I chose '(.+)' customer from Dropdown$")
    public void findName(String name){
        cusLogin.selectName(name);
    }
    @And ("^I click Login$")
    public void clickLoginBtn(){
        cusLogin.clickLogin();
    }

    @Then("^Then I verify they are more than one account under Hermoine Granger account$")
    public void verifyUserHasMoreThanOneAcc(){
        cusLogin.verifyUserHasMoreThanOneAcc();
    }
    @When("^user in customer page, verify page name$")
    public void user_in_customer_page_verify_page_name() {
        cusLogin.pageName();
    }
    @Then("^I verify name on-page is the same as login '(.+)'$")
    public void i_verify_name_on_page_is_the_same_as_login(String name) {
        cusLogin.nameOnPage(name);
    }
    @Then("^user logs out$")
    public void user_logs_out() {
        cusLogin.logoutuser();
    }
    @And ("^enter an amount '(.+)'$")
    public void click_deposit(int number){
        cusLogin.deposite(number);
    }
    @And ("^click button to submit$")
    public void btnSUbmit(){
        cusLogin.submit();
    }
    @Then ("^I verify message '(.+)' is visible on the page$")
    public void verifyMessage(String text){
        cusLogin.message(text);
    }
    @And ("^click button '(.+)'$")
    public void transaction(String name){
        cusLogin.buttonClick(name);
    }
    @Then ("^I verify the last transaction date and amount$")
    public void verify(){
        cusLogin.verifyDisplay();
    }
}
