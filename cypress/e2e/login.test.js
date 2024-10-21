describe("Login Test", () => {
    beforeEach(() => {
      // Visit the local server before each test
      cy.visit("http://127.0.0.1:5500/");
    });
  
    it("should login successfully", () => {
      // Close the register modal if it's open
      cy.get("#registerModal").then(($modal) => {
        if ($modal.is(":visible")) {
          cy.get("#registerModal .btn-close").click();
        }
      });
  
      // Click the login button and ensure the login modal is visible
      cy.get("[data-auth='login']").should("be.visible").first().click();
      cy.get("#loginModal").should("be.visible");
  
      // Fill in the login form and submit
      cy.get('input[name="email"]').type("user@example.com");
      cy.get('input[name="password"]').type("validPassword");
      cy.get("form#loginForm").submit();
    });
  
    it("should fail to login with wrong password", () => {
      // Close the register modal if it's open
      cy.get("#registerModal").then(($modal) => {
        if ($modal.is(":visible")) {
          cy.get("#registerModal .btn-close").click();
        }
      });
  
      // Click the login button
      cy.get("[data-auth='login']").should("be.visible").first().click();
  
      // Fill in the login form with incorrect credentials and submit
      cy.get('input[name="email"]').type("user@example.com");
      cy.get('input[name="password"]').type("wrongPassword");
      cy.get("form#loginForm").submit();
  
      // Assert for an alert message
      cy.on("window:alert", (text) => {
        expect(text).to.equal(
          "Either your username was not found or your password is incorrect",
        );
      });
    });
  });
  