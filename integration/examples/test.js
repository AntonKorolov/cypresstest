describe('My First Test', () => {
  it('clicks the link "Services"', () => {
    cy.visit('https://www.open4business.io/')

    cy.contains('Services').click()
    cy.contains('Castration').click()
    cy.get('.addToCartBtn > :nth-child(1) > span').click()
    cy.get('[style="margin-top: 10px; margin-bottom: 10px;"]').click()
    cy.get('.supplier-checkout-btn').click()
  })
})
