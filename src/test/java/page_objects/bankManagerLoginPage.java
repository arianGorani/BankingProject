package page_objects;

import driverWrapper.Web;
import framework.WebCommands;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

public class bankManagerLoginPage extends WebCommands {

    By btnManager = By.xpath("//button[contains(text(),'Bank Manager Login')]");
    By enterFieldN = By.xpath("//input[@placeholder='First Name']");
    By enterFieldL = By.xpath("//input[@placeholder='Last Name']");
    By enterFieldZip = By.xpath("");

    public void enterFieldN(String name){
        type(enterFieldN , name);
    }
    public void enterFieldL(String name){
        type(enterFieldL , name);
    }
    public void enterZip(int number){
        enterField(enterFieldZip , number);
    }
    public void TakesScreenshot(){
        TakesScreenshot sk =(TakesScreenshot) Web.getDriver();
        File scrShot = sk.getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(scrShot, new File("./screenShots/img.jpg"));
        }catch (IOException e){
            e.printStackTrace();
        }
    }


}
