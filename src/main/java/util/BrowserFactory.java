package util;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserFactory {
	static WebDriver driver;
	public static WebDriver launchBrowser() {
		System.setProperty("webdriver.chrome.driver", ".\\driver_latest\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.get("https://techfios.com/test/billing/?ng=admin/");
		driver.manage().window().maximize();
		
		return driver;
		
	}

}
