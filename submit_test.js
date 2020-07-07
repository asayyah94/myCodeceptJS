Feature('submit');

Scenario('check submission on contact page', (I) => {
	I.amOnPage('/contact');
	I.fillField('Name', 'Amirhossein');
	I.fillField('Email', 'asayyah1994@gmail.com');
	I.fillField('Website', 'https://github.com/asayyah94');
	I.fillField('Date', 'July 4, 2020');
	I.click('Submit');
	I.see('Message Sent');
});
