package page_objects;

import driverWrapper.Web;
import framework.WebCommands;

public class homepagePage extends WebCommands {

    Web web = new Web();

    public void openApp(String env,String browser){
        web.openUrl(env, browser);
    }
}
