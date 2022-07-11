describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have the number buttons update the display of the running total', () =>{
  cy.get('#number5').click();
  cy.get('#number5').click();
  cy.get('.display').should('contain', '55')

  })
  it('should have the arithmetical operations update the display with the result of the operation', () =>{
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '25')
  })
  it('should multiple operations be chained together',() =>{
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '125')
  })

  it('should the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?', () =>{
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0.000900090009')
  })

  it('should do in exceptional circumstances? Specifically, if you divide by zero, what is the effect?', () =>{
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','infinity');
  })
})