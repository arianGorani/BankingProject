package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.TakesScreenshot;
import org.testng.Assert;

public class homepagePage extends WebCommands {

    Web web = new Web();

    public void openApp(String env,String browser){
        web.openUrl(env, browser);
    }

    By clickButton = By.xpath("//button[contains(text(),'Bank Manager Login')]");
    By addButton = By.xpath("//button[@ng-click='addCust()']");
    By enterName = By.xpath("//input[@placeholder='First Name']");
    By enterLast = By.xpath("//input[@placeholder='Last Name']");
    By enterPostal = By.xpath("//input[@placeholder='Post Code']");
    By clickAddButton = By.xpath("//button[@type='submit']");


    public void clickButtonB(){
        clickThis(clickButton);
    }
    public void clickAdd(){
        clickThis(addButton);
    }
    public void fillForm(String name){
        enterField(enterName, name);
    }
    public void fillLast(String name){
        enterField(enterLast, name);
    }
    public void fillPost(int name){
        enterField(enterPostal, name);
    }
    public void clickToAdd(){
        clickThis(clickAddButton);
    }
    public void takesScreenshot(String name){

        try {
            Alert popUp = Web.getDriver().switchTo().alert();
            String popUpText = popUp.getText();
            waitAMin();
            Assert.assertEquals(popUpText, name);
            popUp.accept();
            System.out.println("Done");
        }catch (NoAlertPresentException ee){
            ee.getMessage();
        }


    }

}
