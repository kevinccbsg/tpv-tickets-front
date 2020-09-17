describe('BkDynamicSelect', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/config', 'fixture:config').as('getConfig');
    cy.route('POST', '/api/v1/login', 'fixture:login').as('loginRequest');
    cy.route('GET', '/api/v1/tickets', 'fixture:tickets').as('getTicketsRequest');
    cy.visit('/');
    cy.typeLogin('test', 'test1234');
    cy.get('[data-cy=btn]').click();
    cy.wait(['@getConfig', '@loginRequest']);
    cy.wait(['@getConfig', '@getTicketsRequest']);
  });

  it('Should render the main screen when the Main tab is clicked', () => {
    cy.get('[data-cy=Main-select]').click();
    cy.get('.main.content').should('be.visible');
  });

  it('should render the main PdfLoder when the Main tab is clicked', () => {
    cy.get('[data-cy=Pdf-select]').click({ force: true });
    cy.wait(500);
    cy.get('.load-pdf-container.content').should('be.visible');
  });

  it('Should be redirected to the login when you click on the exit tab', () => {
    cy.get('[data-cy=Exit-select]').click();
    cy.url().should('be', '/login');
    cy.getCookie('session_token').should('be.null');
  });
});
