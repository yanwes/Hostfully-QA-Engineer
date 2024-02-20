Feature: Find a computer

  Background:
    Given I go to the Computers Database page
    And I see "Add a new computer" button

  Scenario: Delete a computer
    Given I see "ACE" in the list of computers
    And I select "ACE" in the list of computers
    When I click on "Delete" button
    Then I see a notification "Done ! Done ! Computer ACE has been deleted

