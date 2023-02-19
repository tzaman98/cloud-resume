describe('End-to-End Test for JS to call API', () => {
  it('GET', () => {
      cy.request('GET', 'https://e0jn3s5wx8.execute-api.us-east-1.amazonaws.com/dev')
      .then((res) => {expect(res).to.have.property('status', 200)})
  })
})