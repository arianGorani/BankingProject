package page_objects;

import framework.WebCommands;
import org.openqa.selenium.By;

public class customerLoginPage extends WebCommands {

    By clickCustom = By.xpath("//button[contains(text(),'Customer Login')]");
    By btnLogin = By.xpath("//button[contains(text(),'Login')]");
    By selectDropDown = By.xpath("//select[@id='userSelect']");




    public void clickCust(){
        clickThis(clickCustom);
    }
    public void clickLogin(){
        clickThis(btnLogin);
    }
    public void selectName(String name){
        selectDropDown(selectDropDown, name);
    }
}
