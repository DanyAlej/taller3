context('Registering with existing username', () => {

  it('makes a correct login attemp', () => {
    cy.visit('https://habitica.com/static/home')
    cy.get('#usernameInput').type('danyalej').should('have.value', 'danyalej');
    cy.get('[type="email"]').type('da.benavides@uniandes.edu.co', 'da.benavides@uniandes.edu.co')
    cy.get('[placeholder="Password"]').type('secretpassword');
    cy.get('[placeholder="Confirm Password"]').type('secretpassword');
    cy.get('.form > .btn').click();
  })
});

context('Login Tests', () => {

  it('makes a correct login attemp', () => {
    cy.visit('https://habitica.com/static/home')
    cy.get('.login-button').click();

    cy.get('#usernameInput').type('da.benavides@uniandes.edu.co').should('have.value', 'da.benavides@uniandes.edu.co');
    cy.get('#passwordInput').type('xedjes-jAnxid-xetji0');

    cy.get('.btn-info[type="submit"]').click();

  })
});

context('Unsuccesfully creates test', () => {
  it('Checks for alert, not enough Gems and Category', () => {
    cy.get(':nth-child(7) > .nav-link').click();

    cy.contains('Create Challenge', {timeout: 1000}).click();
    cy.wait(500);
    var name="What is your Challenge name?";
    cy.get(`input[placeholder="${name}"]`, {timeout: 2000}).type('meditation', {delay: 200}).should('have.value', 'meditation');
;

    var shortName="What short tag should be used to identify your Challenge?";
    cy.get(`input[placeholder="${shortName}"]`, {timeout: 2000}).type('meditation', {delay: 200}).should('have.value', 'meditation');
;

    var summary="Write a short description advertising your Challenge to other Habiticans. What is the main purpose of your Challenge and why should people join it? Try to include useful keywords in the description so that Habiticans can easily find it when they search!";
    cy.get(`textarea[placeholder="${summary}"]`, {timeout: 2000}).type('meditation', {delay: 200}).should('have.value', 'meditation');
;

    var description="Use this section to go into more detail about everything that Challenge participants should know about your Challenge.";
    cy.get(`textarea[placeholder="${description}"]`, {timeout: 2000}).type('meditation', {delay: 200}).should('have.value', 'meditation');
;

    cy.get('#challenge-modal___BV_modal_body_ > div > div:nth-child(5) > select').select('00000000-0000-4000-A000-000000000000');
    cy.wait(500);
    //cy.get('.category-wrap', {timeout: 2000}).click('left');
    //cy.get('.category-box > :nth-child(13) > .custom-control > .custom-control-label').click();
    //cy.get('.category-box > :nth-child(13) > .custom-control > .custom-control-label').click();
    cy.get('.submit-button-wrapper > .btn').click();

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy
    .get('.submit-button-wrapper > .btn').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith("One or more categories must be selected\nYou can't afford this prize. Purchase more gems or lower the prize amount.")      
    })  

  })
});

context('Login Tests', () => {

  it('makes a correct login attemp', () => {
    cy.visit('https://habitica.com/static/home')
    cy.get('.login-button').click();

    cy.get('#usernameInput').type('da.benavides@uniandes.edu.co').should('have.value', 'da.benavides@uniandes.edu.co');
    cy.get('#passwordInput').type('xedjes-jAnxid-xetji0');

    cy.get('.btn-info[type="submit"]').click();

  })
});


context('Create a habit test', () => {

  it('Correctly creates a meditaiton habit', () => {
    cy.get('#create-task-btn').click();
    cy.get('.create-task-area > .d-flex > :nth-child(1)').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .form-control').type('Meditation', {delay: 100}).should('have.value', 'Meditation');
    cy.get('.mb-0 > .form-control').type('I have to meditate 20 minutes per day in two sessions', {delay: 100}).should('have.value', 'I have to meditate 20 minutes per day in two sessions');
    cy.get(':nth-child(1) > .habit-option-button').click();
    cy.get('.items-none').click();
    cy.wait(500);
    cy.get(':nth-child(3) > .dropdown-item > .label > p').click();
    cy.get('.task-modal-footer > .btn').click();


  })
});

context('Create daily task', () => {

  it('Succesfully creates a daily task of skincare', () => {
    cy.get('#create-task-btn').click();
    cy.get('.create-task-area > .d-flex > :nth-child(2)').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .form-control').type('Skincare', {delay: 100}).should('have.value', 'Skincare');
    cy.get('.mb-0 > .form-control').type('I follow my skincare regimen', {delay: 100}).should('have.value', 'I follow my skincare regimen');
    cy.get('.inline-edit-input').type('Cleansing', {delay: 100}).should('have.value', 'Cleansing');
    cy.get('.inline-edit-input').type('{enter}');
    cy.wait(500);
    cy.get('.new-checklist > .inline-edit-input').type('Serum', {delay: 100}).should('have.value', 'Serum');
    cy.get('.new-checklist > .inline-edit-input').type('{enter}');
    cy.wait(500);
    cy.get('.new-checklist > .inline-edit-input').type('Moisturizer', {delay: 100}).should('have.value', 'Moisturizer');
    cy.get('.new-checklist > .inline-edit-input').type('{enter}');
    cy.wait(500);
    cy.get('.new-checklist > .inline-edit-input').type('Sunscreen', {delay: 100}).should('have.value', 'Sunscreen');
    cy.get('.new-checklist > .inline-edit-input').type('{enter}');
    cy.wait(500);
    cy.get('.task-modal-footer > .btn').click();

  })
});

