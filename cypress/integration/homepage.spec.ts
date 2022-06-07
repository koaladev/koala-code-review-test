describe('Homepage', () => {
  // For desktop view
  context('720p resolution', () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });

    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });
    });
  });
});
