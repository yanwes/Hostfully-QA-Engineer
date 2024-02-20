Feature: Find a computer

  Background:
    Given I go to the Computers Database page
    And I see "Add a new computer" button

  Scenario: Find the recent computer created
    Given I click on "Add a new computer" button
    And I am on the "Add a computer" page
    When I fill out a valid "Computer name"
    And I fill out a valid "Introduce" date
    And I select a company from the "Company" list
    And I click on "Create this computer" button
    Then I am redirected to the computer list page
    And I see a notification "Done ! Computer <name> has been created"
    When I type the computer name inside the filter input
    And I click on "Filter by name" button
    Then I see the computer in the list of computers

  Scenario: Find a computer that is already registered
    When I type "Apple" inside the filter input
    And I click on "Filter by name" button
    Then I see "Apple" in the list of computers

