/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // to avoid the Uncaught Error on Laybuy website: Appboy must be initialized before calling methods.
  return false
})

describe('Scenario 1 - Search Merchant', () => {
  it('Correct Merchant website opens', () => {
    // Open laybuy.com
    cy.visit('https://www.laybuy.com')

    // Click and Navigate to “Shop”
    cy.get('.nav_menu-module--nav-item--2PKfV').contains('Shop').click({ force: true })

    cy.url().should('contain', 'shop-here')
    cy.wait(5000) // TODO: Find better way to wait page load
  
    // In the search input, enter “Heart of Oxford”
    cy.get('.header-module--wrapper--2bozv').get('input[type=search]').click({force: true}).type('Heart of Oxford', { delay: 100 })
   
    cy.intercept('GET', '**api//tiles**').as('tilesGet');    
    cy.wait('@tilesGet')

    // Verify that there are at least 2 shop directory tiles
    cy.get('.shop-directory-module--tiles--33tJj').find('a').should('have.lengthOf.at.least', 2)

    // Click on any tile and verify that a new window opens with the correct merchant website
    cy.get('.tile-module--tile--1ZeJx').first().invoke("attr", "href").as('merchantWebsite')
    cy.get('.tile-module--tile--1ZeJx').first().invoke('removeAttr', 'target').click()

    cy.get('@merchantWebsite').then((merchantUrl) => {
      cy.url().should('eq', merchantUrl)
    })

  })  
})
