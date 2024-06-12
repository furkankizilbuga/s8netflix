/* eslint-disable no-undef */
describe('sanity check', () => {
  it('opens the website', () => {
    cy.visit('http://localhost:5173/')
  })
})

describe("success", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

    it("opens the login page", () => {
      //TODO
      cy.url().should("contain", "/login");
    })

    it("submits form", () => {
      //TODO
      cy.get('[data-cy]="input-email"').type("example@gmail.com")
      cy.get('[data-cy]="input-password"').type("12345aA.")
      cy.get('[data-cy]="input-terms"').check()
      cy.get('[data-cy]="submit-login-form"').click()
      cy.url().should("contain", "/home")
    })

    it("default button disabled", () => {
      cy.get('[data-cy]="submit-login-form"').should("be.disabled")
    })

})


describe("fail", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it("all fail", () => {

    //act
    cy.get('[data-cy]="input-email"').type("example@gmail.com")
    cy.get('[data-cy]="input-password"').type("123")
    cy.get('[data-cy]="input-terms"').check()
    cy.get('[data-cy]="input-terms"').uncheck()

    //assert
    cy.get() //errors lenghti 3 olmalı
    cy.contains("Geçerli bir email adresi giriniz!").should("be.visible")
  })

})