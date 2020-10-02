@login
Feature: login 
Scenario Outline: Valid Client should be able to login 
	Given User is already in login page 
	When user enters "<username>" and "<password>" 
	And click signin button
	Then close the browser 
	
	Examples:
	|username| password|
	|techfiosdemo@gmail.com|abc123|
	
	Scenario: client with invalid credentials should not be able to log in techfios site
	Given user is on login page
	When user enter wrong username "techfidemo@gmail.com" and valid password "abc123"
	Then dashboard page should not display
	
	Scenario: client with invalid credentials should not be able to log in techfios site
	Given user is on login page
	When user enter valid username "techfiosdemo@gmail.com" and wrong password "123abc"
	Then dashboard page should not display
	