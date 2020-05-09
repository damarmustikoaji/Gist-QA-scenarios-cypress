/// <reference types="cypress" />

context('Gist QA scenarios', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('base_url')+'/login')
    cy.get('input[id="login_field"]')
      .type(Cypress.env('username')).should('have.value', Cypress.env('username'))
    cy.get('input[id="password"]')
      .type(Cypress.env('password')).should('have.value', Cypress.env('password'))
    cy.get('input[name="commit"]').click()
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.visit(Cypress.env('gits_url'))
    // create
    cy.get('input[name="gist[description]"]').type('Gist description…')
    cy.get('input[name="gist[contents][][name]"]').type('Filename including extension….md')
    cy.get('pre[class=" CodeMirror-line "]').type('Filename including extension….md')
    cy.get('button[class="btn js-gist-create "]').click()
    // edit
    cy.get('a[aria-label="Edit this Gist"]').click()
    cy.get('input[name="gist[description]"]').type('Gist description… Edit')
    cy.get('button[class="btn btn-primary"]').click()
    // delete
    cy.get('button[class="btn btn-sm btn-danger"]').click()
    // list
    cy.visit(Cypress.env('gits_url')+'/'+Cypress.env('username'))
  })
})
