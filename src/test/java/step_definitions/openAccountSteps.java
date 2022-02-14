package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import driverWrapper.Web;
import page_objects.openAccountPage;

public class openAccountSteps {
//TC2
    openAccountPage op = new openAccountPage();
    Web web = new Web();

    @And("^I click on Open Account$")
    public void i_click_on_Open_Account() {
        op.clickButton();
    }
    @And("^I chose '(.+)' on dropdown Customer Name$")
    public void i_chose_Harry_Potter_on_dropdown_Customer_Name(String name)  {
        op.selectName(name);
    }

    @And("^I chose '(.+)' on dropdown Currency$")
    public void dropdown_Currency(String name) {
        op.selectMoney(name);
    }

    @And("^I click the Process button$")
    public void i_click_the_Process_button()  {
        op.clkProcess();
    }

    @Then("^I verify pop up alert is displayed$")
    public void i_verify_pop_up_alert_is_displayed() {
        op.alertVerification();
        web.closePage();
    }


}
