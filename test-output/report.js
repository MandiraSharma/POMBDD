$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addContact.feature");
formatter.feature({
  "line": 2,
  "name": "Add contact",
  "description": "",
  "id": "add-contact",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addcontact"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to add contact",
  "description": "",
  "id": "add-contact;user-should-be-able-to-add-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be on Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click CRM Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click add contact",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter \"\u003cfullname\u003e\" and \"\u003ccompanyName\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and\"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and\"\u003czip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "add-contact;user-should-be-able-to-add-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fullName",
        "companyName",
        "email",
        "phone",
        "address",
        "city",
        "state",
        "zip"
      ],
      "line": 16,
      "id": "add-contact;user-should-be-able-to-add-contact;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Mandira Sharma",
        "Techfios",
        "mandiosho@gmail.com",
        "1234567896",
        "Fortworth",
        "Step",
        "TX",
        "12123"
      ],
      "line": 17,
      "id": "add-contact;user-should-be-able-to-add-contact;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to add contact",
  "description": "",
  "id": "add-contact;user-should-be-able-to-add-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addcontact"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be on Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click CRM Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click add contact",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter \"\u003cfullname\u003e\" and \"Techfios\" and \"mandiosho@gmail.com\" and \"1234567896\" and\"Fortworth\" and \"Step\" and \"TX\" and\"12123\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Valid Client should be able to login",
  "description": "",
  "id": "login;valid-client-should-be-able-to-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login;valid-client-should-be-able-to-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login;valid-client-should-be-able-to-login;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123"
      ],
      "line": 11,
      "id": "login;valid-client-should-be-able-to-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Valid Client should be able to login",
  "description": "",
  "id": "login;valid-client-should-be-able-to-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "client with invalid credentials should not be able to log in techfios site",
  "description": "",
  "id": "login;client-with-invalid-credentials-should-not-be-able-to-log-in-techfios-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter wrong username \"techfidemo@gmail.com\" and valid password \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "dashboard page should not display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "client with invalid credentials should not be able to log in techfios site",
  "description": "",
  "id": "login;client-with-invalid-credentials-should-not-be-able-to-log-in-techfios-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enter valid username \"techfiosdemo@gmail.com\" and wrong password \"123abc\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "dashboard page should not display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});