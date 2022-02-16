package utils;

import driverWrapper.Web;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;

public class Screenshots {


    public static void takeScreenshot(){

        Screenshot screenshot = new AShot().takeScreenshot(Web.getDriver());
    }



}
