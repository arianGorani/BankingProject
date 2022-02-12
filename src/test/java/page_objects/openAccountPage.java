package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class openAccountPage extends WebCommands {

    By openAccount = By.xpath("//body/div[1]/div[1]/div[2]/div[1]/div[1]/button[2]");
    By selectDropDown = By.xpath("//select[@id='userSelect']");
    By selectMoney = By.xpath("//select[@id='currency']");
    By clickProcess = By.xpath("//button[contains(text(),'Process')]");



    public void clickButton(){
        clickThis(openAccount);
    }
    public void selectName(String name){
        selectDropDown(selectDropDown, name);
    }
    public void selectMoney(String name){
        selectDropDown(selectMoney, name);
    }
    public void clkProcess(){
        clickThis(clickProcess);
    }
    public void alertVerification(){
        try {
            Alert popUp = Web.getDriver().switchTo().alert();
            int windHandle = Web.getDriver().getWindowHandle().length();
            Assert.assertEquals(windHandle  ,Web.getDriver().getWindowHandle().length());
            waitASec();
            popUp.accept();
        }catch (NoAlertPresentException ee){
            ee.getMessage();
        }
    }



}
