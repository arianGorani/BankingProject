package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import page_objects.customersPage;

public class customersSteps {

    customersPage cusPage = new customersPage();
    @And("^I click on Customer$")
    public void i_click_on_Customer() {
        cusPage.clickCustom();
    }
    @And("^I click delete on one of the costumers$")
    public void delCustomer() {
        cusPage.delCustomer();
    }
    @Then("^I verify the customer is deleted$")
    public void i_verify_the_customer_is_deleted() {

    }


}
