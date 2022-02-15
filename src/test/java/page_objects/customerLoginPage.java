package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.util.List;

public class customerLoginPage extends WebCommands {

    By clickCustom = By.xpath("//button[contains(text(),'Customer Login')]");
    By btnLogin = By.xpath("//button[contains(text(),'Login')]");
    By btnLogOut = By.xpath("//button[contains(text(),'Logout')]");
    By selectDropDown = By.xpath("//select[@id='userSelect']");
    By userAccountDropdown = By.xpath("//select[@ng-options='account for account in Accounts']");
    By userNameDisplay = By.xpath("//span[contains(text(),'Hermoine Granger')]");




    public void clickCust(){
        clickThis(clickCustom);
    }
    public void clickLogin(){
        clickThis(btnLogin);
    }
    public void selectName(String name){
        selectDropDown(selectDropDown, name);
    }

    public void verifyUserHasMoreThanOneAcc() {
        WebElement dropDown = Web.getDriver().findElement(userAccountDropdown);
        Select dropD = new Select(dropDown);
        List<WebElement> allOptions = dropD.getOptions();
        Assert.assertNotEquals(allOptions.size(), 1);

    }
    public void pageName(){
        System.out.println( getPageName());
    }
    public void nameOnPage(String name){
       String nameDisplay = getElementText(userNameDisplay);
       Assert.assertEquals(nameDisplay, name);
    }
    public void logoutuser(){
        clickThis(btnLogOut);
    }


}
