package page;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.junit.Assert;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;

	}

	// Element library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement USERNAME_LOCATOR;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement PASSWORD_LOCATOR;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SIGNIN_LOCATOR;
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Dashboard')]")
	WebElement DASHBOARD_FIELD_LOCATOR;

	// Methods to interact with elements
	public void login(String username,String password) {
		
	}
	public void enterUserNameAndPassword(String username, String password) {
		USERNAME_LOCATOR.sendKeys(username);
		PASSWORD_LOCATOR.sendKeys(password);
		
	}
	public void enterUserName(String username) {
		USERNAME_LOCATOR.sendKeys(username);
		
	}

	public void enterPassword(String password) {
		PASSWORD_LOCATOR.sendKeys(password);
	}

	public void clickSigninButton() {
		SIGNIN_LOCATOR.click();
	}

	public void tearDown() {
		driver.close();
		driver.quit();
	}

	public void enterInvalidUserName(String username) {
		USERNAME_LOCATOR.sendKeys(username);
	}

	public void enterIvalidPassword(String password) {
		PASSWORD_LOCATOR.sendKeys(password);
	}

	public void verifyDashboardPage() {

		Assert.assertEquals("Page found !!!", DASHBOARD_FIELD_LOCATOR.getText(), "Dashboard");
	}
}
