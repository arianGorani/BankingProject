package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class customersPage extends WebCommands {

    By costumeButton=By.xpath("//body/div[1]/div[1]/div[2]/div[1]/div[1]/button[3]");
    By listPresent = By.xpath("//tbody/tr");
    By delCustomer = By.xpath("//tbody/tr[5]/td[5]/button[1]");

    public void clickCustom(){
        clickThis(costumeButton);
    }
    public void delCustomer(){
        List<WebElement> listBefore = Web.getDriver().findElements(listPresent);
        clickThis(delCustomer);
        List<WebElement> listAfter = Web.getDriver().findElements(listPresent);
        Assert.assertNotEquals(listBefore, listAfter);
        System.out.println(listBefore.size()+" "+ listAfter.size());
    }
}
