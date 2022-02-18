package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.io.File;
import java.io.IOException;
import java.sql.Array;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class customerLoginPage extends WebCommands {

    By clickCustom = By.xpath("//button[contains(text(),'Customer Login')]");
    By btnLogin = By.xpath("//button[contains(text(),'Login')]");
    By btnLogOut = By.xpath("//button[contains(text(),'Logout')]");
    By selectDropDown = By.xpath("//select[@id='userSelect']");
    By userAccountDropdown = By.xpath("//select[@ng-options='account for account in Accounts']");
    By userNameDisplay = By.xpath("//span[contains(text(),'Hermoine Granger')]");
    By btnDeposit = By.xpath("//button[@ng-class='btnClass2']");
    By btnTransaction = By.xpath("//div[@ng-hide='noAccount']//button[1]");
    By btnWithdrawal = By.xpath("//button[@ng-class='btnClass3']");
    By inputAmount = By.xpath("//input[@type='number']");
    By btnSubmit = By.xpath("//button[@type='submit']");
    By success = By.xpath("//span[contains(text(),'Deposit Successful')]");
    By dateDisplay =By.xpath("//tbody//td[1]");
    By amountDisplay = By.xpath("//tbody//td[2]");




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
        enterField(inputAmount, number);
    }
    public void submit(){
        clickThis(btnSubmit);
    }
    public void message(String text){
       String msg = Web.getDriver().findElement(success).getText();
       Assert.assertEquals(msg, text);
       waitAMin();
    }
    public void buttonSelect(String name){
        if (name.equalsIgnoreCase("Transactions")){
            clickThis(btnTransaction);
        }else if(name.equalsIgnoreCase("Deposit")){
            clickThis(btnDeposit);
        }else if(name.equalsIgnoreCase("Withdrawal")){
            clickThis(btnWithdrawal);
        }
    }
    public void  verifyDisplay(){
        Date dataIs = new Date();
        SimpleDateFormat df = new SimpleDateFormat(" MMM dd, YYYY h:mm:ss a" );
        String dateNow = df.format(dataIs);
        String dateWeb = Web.getDriver().findElement(dateDisplay).getText();
        System.out.println("Date and time of transaction from system is "+ dateNow + ", from website is "+ dateWeb);

       Boolean date = Web.getDriver().findElement(dateDisplay).isDisplayed();
       Assert.assertTrue(date);
       Boolean value = Web.getDriver().findElement(amountDisplay).isDisplayed();
       Assert.assertNotNull(value);
    }
    public void enterMSG(String text){
        type(inputAmount, text);
    }
    public void screenshot(){
        takeScreenshot();
//            TakesScreenshot sk =(TakesScreenshot)Web.getDriver();
//            File scrShot = sk.getScreenshotAs(OutputType.FILE);
//            try {
//                FileUtils.copyFile(scrShot, new File("./screenShots/img.jpg"));
//            }catch (IOException e){
//                e.printStackTrace();
//            }
    }
}
