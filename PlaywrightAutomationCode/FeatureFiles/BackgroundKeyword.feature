
Feature: BackgroundKeyword

    Background: launching the broswer
        Given I launch the browser

    # Background: launching the broswer
    #     Given I launch the browser           

    @regression
    Scenario: Verify Dates in Playwright
        And I verify dates in real time way
        And I close the browser

    @regression
    Scenario: Verify web table in static way
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: Verify web table in static way2
        And I verify web table in static way2
        And I close the browser

    @regression
    Scenario: Verify web calendar in static way
        And I verify web calendar in static way
        And I close the browser

