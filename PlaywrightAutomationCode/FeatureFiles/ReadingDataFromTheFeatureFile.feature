
Feature:ReadingDataFromTheFeatureFile

    Background: launching the broswer
        Given I launch the browser

    @regression @smoke 
    Scenario: Verify automation test practice applictaion by passing the Testdata over the feature file
        And I Verify automation test practice applictaion by passing the Testdata over the feature file "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        And I close the browser

        Examples:
            | Name     | Email              | Phone      | Address   | Wikipedia  |
            | Shrikant | shrikant@gmail.com | 9876543210 | Hyderabad | testing    |
            | Shrinath | srinath@gmail.com  | 9009900990 | Chennai   | playwright |
            | vani     | vani@gmail.com     | 6789012345 | Bangalore | Selenium   |
            | suraj    | suraj@gmail.com    | 8908908908 | kerala    | typescript |
            

    @regression @sanity
    Scenario Outline: Verify orange HRM applictaion by passing the Testdata over the feature file
        And I Verify orange HRM applictaion by passing the Testdata over the feature file "<username>","<password>"
        And I close the browser

        Examples:
            | username | password |
            | Admin    | admin123 |
