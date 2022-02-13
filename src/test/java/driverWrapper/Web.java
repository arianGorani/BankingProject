package driverWrapper;

import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import utils.TestConstant;
import cucumber.api.java.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

public class Web {

    // Methods related to Web-launch, close

    private static WebDriver driver;


    //@Before
    public void openUrl(String env,String browser) {

        String url = "https://www.globalsqa.com/angularJs-protractor/BankingProject/";
        if(env.equalsIgnoreCase("local")){
            switch (browser.toLowerCase()) {
                case "chrome":
                    System.setProperty("webdriver.chrome.driver", "./src/test/java/drivers/chromedriver.exe");
                    driver = new ChromeDriver();
                    driver.get(url);
                    driver.manage().window().maximize();
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;
                case "firefox":
                    System.setProperty("webdriver.gecko.driver", "./src/test/java/drivers/GeckoDriver.exe");
                    driver = new FirefoxDriver();
                    driver.get(url);
                    driver.manage().window().maximize();
                    break;
                case "edge":
                    System.setProperty("webdriver.edge.driver", "./src/test/java/drivers/msedgedriver.exe");
                    driver = new EdgeDriver();
                    driver.get(url);
                    driver.manage().window().maximize();
                    break;
                default:
                    System.out.println("Invalid Browser");
            }
        }else if (env.equalsIgnoreCase("saucelab")){
            String sauceUrl = "https://oauth-nini.usa20-2ea33:c2e3896a-09d9-42ed-abd5-c0cdb5ef2c81@ondemand.us-west-1.saucelabs.com:443/wd/hub";
            switch (browser.toLowerCase()) {
                case "chrome":
                    DesiredCapabilities capsChrome = DesiredCapabilities.chrome();
                    capsChrome.setCapability("platform","windows 10");
                    capsChrome.setCapability("version", "latest");

                    try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsChrome);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }

                    driver.get(url);
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;
                case "firefox":
                    DesiredCapabilities capsFirefox = DesiredCapabilities.firefox();
                    capsFirefox.setCapability("platform","windows 10");
                    capsFirefox.setCapability("version", "latest");

                    try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsFirefox);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }

                    driver.get(url);
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;
                case "edge":
                    DesiredCapabilities capsEdge = DesiredCapabilities.edge();
                    capsEdge.setCapability("platform","windows 10");
                    capsEdge.setCapability("version", "latest");

                    try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsEdge);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }

                    driver.get(url);
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;



                default:
                    System.out.println("Invalid Browser");

            }
        }

    }


        //@After
        public void closePage () {
            driver.close();
        }

        @After
        public void quitPages () {
            driver.quit();
        }


        public static WebDriver getDriver () {
            return driver;
        }


    }

