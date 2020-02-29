/* eslint-disable no-undef */

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

  it(`The table should have a total of ${2} pdfs`, () => {
    cy.get('.table-container').should('have.length', 2);
  });

  it('Testing the headers of the table', () => {
    cy.get('.tickets-container .container .header').first().click({ force: true });
    cy.get('.content > table thead tr').children().should('have.length', 3);
    cy.get('table > thead > tr').within(() => {
      cy.get('th').eq(0).contains('Fecha');
      cy.get('th').eq(1).contains('Precio');
      cy.get('th').eq(2).contains('Comprobado');
    });
  });

  it('Input date validations', () => {
    cy.get('[data-cy=main-date-input]').type('08/08/2020');
    cy.get('.error').should('be.visible');
    cy.get('[data-cy=main-date-input]').clear().type('08-32-2020');
    cy.get('.error').should('be.visible');
  });

  it('Input price validations', () => {
    cy.get('[data-cy=main-price-input]').clear().type('1234');
    cy.get('.error').should('be.visible');
    cy.get('[data-cy=main-price-input]').clear().type('1.23');
    cy.get('.error').should('be.visible');
    cy.get('[data-cy=main-price-input]').clear().type('12,23234');
    cy.get('.error').should('be.visible');
    cy.get('[data-cy=main-price-input]').clear().type('41,2');
    cy.get('.error').should('be.visible');
  });

  it('Should register a ticket and update the validation', () => {
    cy.route({
      method: 'POST',
      url: '/api/v1/tickets/register',
      response: { success: true },
    }).as('regsterTicket');
    cy.route('GET', '/api/v1/tickets', 'fixture:ticketsAfterRegister').as('getTicketsRequest');
    cy.get('[data-cy=main-date-input]').type('08-08-2020');
    cy.get('[data-cy=main-price-input]').type('2,12{enter}');
    cy.wait(['@regsterTicket', '@getTicketsRequest']);
  });
});
