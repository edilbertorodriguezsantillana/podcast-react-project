describe('application flow', () => {
    it('should handle normal application flow', () => {
        cy.visit(
            'http://localhost:8080/'
          );

        cy.findByText(
        'Podcaster'
        ).should('exist');

        cy.findByRole('textbox').type('disgraceland');

        cy.findByText(
            '1'
            ).should('exist');
        
        cy.findByText(
            'Author: Double Elvis'
            ).should('exist');

        cy.findByRole('textbox').clear();

        cy.findByText(
            '100'
            ).should('exist');

        cy.findByText('THE JOE BUDDEN PODCAST').click();

        cy.findByText(
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.'
            ).should('exist');

        cy.wait(15000);
            
        cy.findByText(
            'Episodes: 50'
            ).should('exist');

        cy.findByText(
            'Episode 616 | "To Whom It May Concern"'
            ).click();
            
        cy.findByText(new RegExp('that Spotify has millions of songs', 'i')).should('exist');

        cy.findByText(
            'by The Joe Budden Network'
            ).click();

        cy.findByText(
            'Episodes: 50'
            ).should('exist');

        cy.findByText(
            'Podcaster'
            ).click();

        cy.findByRole('textbox').should('exist');
    })
})