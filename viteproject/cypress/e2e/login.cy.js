/* eslint-disable no-undef */
describe('sanity check', () => {
  it('opens the website', () => {
    cy.visit('http://localhost:5173/')
  })
})

describe("first page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

    it("opens the first page", () => {  //DONE
      cy.url().should("contain", "/");
    })

    it("sign in button leads to /login", () => {    //DONE
      cy.get('[data-cy="first-sign-in"]').click()
      cy.url().should("contain", "/login");
    })

    it("main input empty button throws error", () => {    //DONE
      cy.get('[data-cy="first-email"]').clear()
      cy.get('[data-cy="first-get-started"]').click()
      cy.get('[data-cy="first-email-error"]').should("be.visible")
      cy.url().should("contain", "/");
    })

    it("main input not valid button throws error", () => {    //DONE
      cy.get('[data-cy="first-email"]').type("asd")
      cy.get('[data-cy="first-get-started"]').click()
      cy.get('[data-cy="first-email-error"]').should("be.visible")
      cy.url().should("contain", "/");
    })

    it("main input valid, button leads to login with email", () => {     //DONE
      cy.get('[data-cy="first-email"]').type("example@example.com")
      cy.get('[data-cy="first-get-started"]').click()
      cy.url().should("contain", "/login");
      cy.get('[data-cy="input-email"]').should("have.value", "example@example.com")
    })

})


describe("login page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
    cy.get('[data-cy="first-sign-in"]').click()
    cy.url().should("contain", "/login");
  })

  it("inputs empty button disabled", () => {    //DONE
      cy.get('[data-cy="input-email"]').clear()
      cy.get('[data-cy="input-password"]').clear()
      cy.get('[data-cy="input-terms"]').uncheck()
      cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

  it("only email empty button disabled", () => {   //DONE
    cy.get('[data-cy="input-email"]').type("a")
    cy.get('[data-cy="input-email"]').clear()
    cy.get('[data-cy="input-email-error"]').should("be.visible")  
    cy.get('[data-cy="input-password"]').type("12345aA.")
    cy.get('[data-cy="input-terms"]').check()
    cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

  it("only password empty button disabled", () => {   //DONE
    cy.get('[data-cy="input-email"]').type("example@example.com")
    cy.get('[data-cy="input-password"]').type("12345aA.")
    cy.get('[data-cy="input-password"]').clear()
    cy.get('[data-cy="input-password-error"]', {withinSubject:null}).should("be.visible")
    cy.get('[data-cy="input-terms"]').check()
    cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

  it("only terms invalid button disabled", () => {   //DONE
    cy.get('[data-cy="input-email"]').type("example@example.com")
    cy.get('[data-cy="input-password"]').type("12345aA.")
    cy.get('[data-cy="input-terms"]').uncheck()
    cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

  it("email and password invalid", () => {    //DONE
    cy.get('[data-cy="input-email"]').clear()
    cy.get('[data-cy="input-password"]').clear()
    cy.get('[data-cy="input-terms"]').check()
    cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

  it("email and terms invalid", () => {    //DONE
    cy.get('[data-cy="input-email"]').clear()
    cy.get('[data-cy="input-password"]').type("12345aA.")
    cy.get('[data-cy="input-terms"]').uncheck()
    cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

  it("password and terms invalid", () => {    //DONE
    cy.get('[data-cy="input-email"]').type("example@example.com")
    cy.get('[data-cy="input-password"]').clear()
    cy.get('[data-cy="input-terms"]').uncheck()
    cy.get('[data-cy="submit-login-form"]').should("be.disabled")
  })

})


describe("welcome page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
    cy.get('[data-cy="first-sign-in"]').click()
    cy.url().should("contain", "/login");
    cy.get('[data-cy="input-email"]').type("example@example.com")
    cy.get('[data-cy="input-password"]').type("12345aA.")
    cy.get('[data-cy="input-terms"]').check()
    cy.get('[data-cy="submit-login-form"]').click()
    cy.url().should("contain", "/welcome");
  })

  it("kullanıcıya tıklandığında /home sayfasına iletiyor", () => {
    cy.get('[data-cy="user-card"]').first().click()
    cy.url().should("contain", "/home");


  })



})

describe("home page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
    cy.get('[data-cy="first-sign-in"]').click()
    cy.url().should("contain", "/login");
    cy.get('[data-cy="input-email"]').type("example@example.com")
    cy.get('[data-cy="input-password"]').type("12345aA.")
    cy.get('[data-cy="input-terms"]').check()
    cy.get('[data-cy="submit-login-form"]').click()
    cy.url().should("contain", "/welcome");
    cy.get('[data-cy="user-card"]').first().click()
    cy.url().should("contain", "/home");
    
  })

  it("fare avatara getirildiğinde userbar açılıyor", () => {
    cy.get('[data-cy="user-panel"]').trigger('mouseenter')
    cy.get('[data-cy="user-bar"]').should("be.visible")


  })



})