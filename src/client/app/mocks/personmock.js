/* global faker */
(function () {
	'use strict'

	var moduleID = 'app.mocks';
	var injectParams = ['$httpBackend'];

	angular.module(moduleID)
		.run(mockConfig);

	mockConfig.$inject = injectParams;
	function mockConfig($httpBackend) {
		var persons = [];

		for (var i = 0; i < 5; i++) {
			persons.push(createPerson());
		};

		function createPerson() {
			return {
				photo: faker.internet.avatar(),
				first_name: faker.name.firstName(),
					last_name: faker.name.lastName(),
				company: faker.company.companyName(),
				phone: faker.phone.phoneNumberFormat(),
				email: faker.internet.email(),
				url: faker.internet.url(),
				address: getAddress(),
				birthday: faker.date.past(),
				notes: faker.lorem.sentence()
			};
		}

		function getAddress() {
			var adr = faker.address;
			var space = ', ';
			return adr.streetAddress() + space
				+ adr.secondaryAddress() + space
				+ adr.city() + space
				+ adr.stateAbbr() + '-'
				+ adr.zipCode() + space
				+ adr.country();
		};

		$httpBackend.whenGET('/person').respond(persons);

	};

})()