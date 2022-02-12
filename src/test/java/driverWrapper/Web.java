package driverWrapper;

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
    private static String url = "https://www.globalsqa.com/angularJs-protractor/BankingProject/";
    private static String sauceUrl = "https://oauth-nini.usa20-2ea33:c2e3896a-09d9-42ed-abd5-c0cdb5ef2c81@ondemand.us-west-1.saucelabs.com:443/wd/hub";


    //@Before
    public void openUrl(String env,String browser) {

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
                default:
                    System.out.println("Invalid Browser");
            }
        }else if (env.equalsIgnoreCase("saucelab")){
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



                default:
                    System.out.println("Invalid Browser");

            }
        }

    }


        @After
        public void closePage () {
            driver.close();
        }


<<<<<<< HEAD
    @After
    public void closePage() {
        driver.close();
    }
=======
        public void quitPages () {
            driver.quit();
        }
>>>>>>> 59305033f400ec1046690f362e43e035acb84d24

        public static WebDriver getDriver () {
            return driver;
        }


    }

