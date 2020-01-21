/* eslint-disable no-undef */
const TOTAL_TICKETS = 11;

describe('Main view', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', '/api/v1/login', 'fixture:login').as('loginRequest');
    cy.route('GET', '/api/v1/tickets', 'fixture:tickets').as('getTicketsRequest');
    cy.visit('/');
    cy.typeLogin('test', 'test1234');
    cy.get('[data-cy=btn]').click();
    cy.wait('@loginRequest');
    cy.wait('@getTicketsRequest');
  });

  it('Main view should content the navbar', () => {
    cy.get('nav').should('be.visible');
    cy.contains('nav', 'BRIKEV');
  });

  it(`The table should have a total of ${TOTAL_TICKETS} rows`, () => {
    cy.get('table tbody').children().should('have.length', TOTAL_TICKETS);
  });

  it('Testing the headers of the table', () => {
    cy.get('table thead tr').children().should('have.length', 3);
    cy.get('table > thead > tr').within(() => {
      cy.get('th').eq(0).contains('Fecha');
      cy.get('th').eq(1).contains('Precio');
      cy.get('th').eq(2).contains('Comprobado');
    });
  });
});
