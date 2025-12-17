
Feature: CrosssBrowserTesting

    @regression
    Scenario: Verify web table in static way using chrome browser
        Given I launch the browser
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: Verify web table in static way using firefox browser
        Given I launch the firefox browser
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: Verify web table in static way using safari browser
        Given I launch the webkit browser
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: Verify web table in static way using headless browser
        Given I launch the headless browser
        And I verify web table in static way
        And I close the browser