package step_definitions;

import cucumber.api.java.en.And;
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

}
