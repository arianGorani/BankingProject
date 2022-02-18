package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import page_objects.bankManagerLoginPage;

public class bankManagerLoginSteps {

    bankManagerLoginPage bankManager = new bankManagerLoginPage();

    @And("^I type (.+) in the First Name field$")
    public void typeN(String name){
        bankManager.enterFieldN(name);
    }
    @And("^I type (.+) in Last name field$")
    public void typeL(String name){
        bankManager.enterFieldL(name);
    }
    @And("^I type (.+) in the Post Code field$")
    public void typeZip(int numb){
        bankManager.enterZip(numb);
    }

    @Then("^PopUp is displayed, Dublicate value$")
    public void popupIsDisplayedDublicateValue() {
        bankManager.TakesScreenshot();
    }
    @Then("^PopUp is displayed with message Please Fill out this field take screenshot$")
    public void popupIsDisplayedWithMessageTakeScreenshot(String arg0) {
        bankManager.TakesScreenshot();
    }
}
