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

    public void openApp(){
        web.openUrl();
    }

    By clickButton = By.xpath("//button[contains(text(),'Bank Manager Login')]");
    By addButton = By.xpath("//body/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]");
    By enterName = By.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/input[1]");
    By enterLast = By.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/input[1]");
    By enterPostal = By.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/input[1]");
    By clickAddButton = By.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/button[1]");


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
