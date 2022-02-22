package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

public class customersPage extends WebCommands {

    List<WebElement> listBefore = new ArrayList<>();
    List<WebElement> listAfter = new ArrayList<>();

    By customerButton=By.xpath("//button[@ng-click='showCust()']");
    By listPresent = By.xpath("//tbody/tr");
    By delCustomer = By.xpath("(//button[text()='Delete'])[1]");
    By messageFailed = By.xpath("//span[contains(text(),'Transaction Failed. You can not withdraw amount mo')]");


    public void clickCustom(){
        clickThis(customerButton);
    }

    public void delCustomer(){
        listBefore = Web.getDriver().findElements(listPresent);
        clickThis(delCustomer);
        listAfter = Web.getDriver().findElements(listPresent);
    }

    public void verifyCustomerIsDeleted(){
        Assert.assertNotEquals(listBefore, listAfter);
        System.out.println("List before deleted customer " + listBefore.size()+" "+ "List after deleted customer " +  listAfter.size());
    }
    public void displayMessageFailed(String text){
        WebElement message = Web.getDriver().findElement(messageFailed);
        Assert.assertEquals(text, message);
    }
}
