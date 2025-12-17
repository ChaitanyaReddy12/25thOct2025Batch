
Feature: playwright Cucumber Hooks

    Background: launching the application
        Given i launch the OrangeHRM application in chrome browser1
        And i launch the OrangeHRM application in chrome browser

    @regression
    Scenario: verify login with valid data
        And Enter the username in OrangeHRM
        And Enter the password in OrangeHRM

    @regression
    Scenario Outline: verify login with different credentials
        And Enter the username in OrangeHRM "<username>"
        And Enter the password in OrangeHRM "<password>"
        And I click on the login button in OrangeHRM

        Examples:
            | username | password |
            | Admin    | admin123 |
            | Admin    | admin123 |

    @regression
    Scenario Outline: verify login with invalid credentials
        And Enter the username in OrangeHRM "<username>"
        And Enter the password in OrangeHRM "<password>"
        And I click on the login button in OrangeHRM
        And I click on the logout button in OrangeHRM

        Examples:
            | username | password |
            | Admin    | admin123 |
            | morning  | 123456   |