package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page_objects.homepagePage;

import java.io.IOException;

public class homepageSteps {

    homepagePage hp = new homepagePage();

<<<<<<< HEAD
    @Given("^I open the application$")
    public void openApplication(){
        hp.openApp();
=======
    @Given("^I open application in (.*) (.*) Browser$")
    public void openApplication(String env, String browser){
        hp.openApp(env, browser);
>>>>>>> 59305033f400ec1046690f362e43e035acb84d24
    }
    @When("^I click on Bank Manager Login$")
    public void clickButton(){
        hp.clickButtonB();
    }
    @And("^I click on Add Customer$")
    public void fill(){
        hp.clickAdd();
    }
    @Then("^I type '(.+)' in first name field$")
    public void fillName(String name){
        hp.fillForm(name);
    }
    @Then("^I type '(.+)' in last name field$")
    public void fillLast(String name){
        hp.fillLast(name);
    }
    @And("^I type '(.+)' in Post Code field$")
    public void fillPost(int number){
        hp.fillPost(number);
    }
    @Then("^I click on Add Costumer button$")
    public void mouseOver() throws IOException {
        hp.clickToAdd();
    }
    @Then("^I verify pop up alert is displayed with message '(.+)'$")
    public void verifyAdding(String name) {
        hp.takesScreenshot(name);
    }
}
