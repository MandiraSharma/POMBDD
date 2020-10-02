package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;
import util.JDBCdatabase;

public class LoginStep {
	WebDriver driver;
	LoginPage loginpage;
	
	@Before
	public void beforeRun() {
		driver =BrowserFactory.launchBrowser();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		
	}

	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		String actualtitle = driver.getTitle();
		System.out.println(actualtitle);
		String expectedtitle = "Login - TechFios Test Application - Billing";
		Assert.assertEquals("login tab is dysplayed", expectedtitle, actualtitle);

	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		//call the JDBCdatabase class and get method here
		loginpage.enterUserNameAndPassword(JDBCdatabase.get("username"),JDBCdatabase.get("password"));
		
//		loginpage.enterUserName(username);
//		loginpage.enterPassword(password);
	}

	@When("^click signin button$")
	public void click_signin_button() throws Throwable {

		loginpage.clickSigninButton();
		Thread.sleep(2000);
	}

	@When("^user should be on Dashboard page$")
	public void user_should_be_on_Dashboard_page() throws Throwable {

		loginpage.verifyDashboardPage();
		Thread.sleep(2000);
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {

		loginpage.tearDown();
	}

	@When("^user enter wrong username \"([^\"]*)\" and valid password \"([^\"]*)\"$")
	public void user_enter_wrong_username_and_valid_password(String username, String password) throws Throwable {

		loginpage.enterInvalidUserName(username);
		loginpage.enterPassword(password);
	}

	@When("^user enter valid username \"([^\"]*)\" and wrong password \"([^\"]*)\"$")
	public void user_enter_valid_username_and_wrong_password(String username, String password) throws Throwable {
		loginpage.enterUserName(username);
		loginpage.enterIvalidPassword(password);
	}

	@Then("^dashboard page should not display$")
	public void dashboard_page_should_not_display() throws Throwable {

	}

	@After
	public void afterRun() {
		loginpage.tearDown();

	}
}
