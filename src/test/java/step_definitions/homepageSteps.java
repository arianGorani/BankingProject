package step_definitions;

import cucumber.api.java.en.Given;
import page_objects.homepagePage;

public class homepageSteps {

    homepagePage hp = new homepagePage();

    @Given("^I open application in (.*) (.*) Browser$")
    public void openApplication(String env, String browser){
        hp.openApp(env, browser);
    }

}
