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
    By btnDeposit = By.xpath("//div[@ng-hide='noAccount']//button[2]");
    By btnTransaction = By.xpath("//div[@ng-hide='noAccount']//button[1]");
    By btnWithdraw = By.xpath("//div[@ng-hide='noAccount']//button[3]");
    By inputAmount = By.xpath("//input[@type='number']");
    By btnSubmit = By.xpath("//button[@type='submit']");
    By success = By.xpath("//span[contains(text(),'Deposit Successful')]");
    By dateDisplay =By.xpath("//tr[3]//td[@class='ng-binding'][1]");
    By amountDisplay = By.xpath("//tr[3]//td[@class='ng-binding'][2]");




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
    public void deposite(int number){
        clickThis(btnDeposit);
        enterField(inputAmount, number);
    }
    public void submit(){
        clickThis(btnSubmit);
    }
    public void message(String text){
       String msg = Web.getDriver().findElement(success).getText();
       Assert.assertEquals(msg, text);
    }
    public void buttonClick(String name){
        if (name.equals("Transaction")){
            clickThis(btnTransaction);
        }else if(name.equals("Deposit")){
            clickThis(btnDeposit);
        }else if(name.equals("Withdraw")){
            clickThis(btnWithdraw);
        }
    }
    public void  verifyDisplay(){
       WebElement date = Web.getDriver().findElement(dateDisplay);
       Assert.assertNotNull(date);
       Boolean value = Web.getDriver().findElement(amountDisplay).isDisplayed();
        Assert.assertNotNull(value);
    }

}
