describe("Testing app", () => {
  beforeEach(() => {
    cy.visit("https://app.100xdevs.com");
  });

  it("is able to log in", () => {
    cy.contains("Login").should("exist");
    cy.contains("Login").click();
    cy.contains("Log in to access paid content!").should("exist", {
      timeout: 10000,
    });
    cy.get("#email").type("email@gmail.com", { force: true });

    // Fill in the password field
    cy.get("#password").type("password");

    cy.get("button").eq(5).click();

    cy.contains("Rahmatdeep").should("exist", { timeout: 10000 });
  });
});
