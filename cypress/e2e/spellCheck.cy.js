describe('Check Website funcitons', () => {
  it('loads to login and then allows login', () => {
    cy.visit('http://localhost:8000')
    cy.get('#usernameInput').type('testing')
    cy.get('#passwordInput').type('password')
    cy.get('button').click()
    cy.get('h1').should((h1)=>{
      expect(h1).to.contain('Welcome testing')
    })
  })
 
})