/// <reference types="cypress" />

import '@percy/cypress';

describe('Staysure Landing Page', () => {
    beforeEach(() => {
        cy.visit('https://staysure.co.uk')
    })

    it('Accept Cookies', () => {     
        cy.get('#onetrust-accept-btn-handler').click()
        cy.percySnapshot('Landing Page')
    })
})