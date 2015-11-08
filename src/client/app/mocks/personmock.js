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

		$httpBackend.whenGET('/persons').respond(persons);

		$httpBackend.whenGET(new RegExp('\\/person\\/[0-9]+')).respond(
			function (method, url) {
				var regexp = new RegExp('\\/person\\/([0-9]+)');
				var id = Number(url.match(regexp)[1]);
				return [200, persons[id]];
			});
		
		//requires ngmock v 1.5
		// $httpBackend.whenRoute('GET', '/person/:id')
		// 	.respond(function (method, url, data, headers, params) {
		// 		return [200, persons[Number(params.id)]];
		// 	});
		

	};

})();