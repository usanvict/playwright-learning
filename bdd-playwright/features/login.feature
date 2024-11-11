Feature: Login action

  Scenario: Login with valid credentials
    Given I am on a login page
    When I fill the login form with valid credentials
    Then I am logged in

  Scenario Outline: Trying to login with invalid credentials
    Given I am on a login page
    When I fill the login form with email "<username>"
    And I click on "Pokračovat"
    And I fill the login form with password "<password>"
    Then I wait for 3 seconds

    Examples:
      | username                | password         |
      | test@test.com           | test             |
      | victoria.usan@gmail.com | test             |
      | victoria.usan@gmail.com | %nEzHozNM4fbBTEH |
