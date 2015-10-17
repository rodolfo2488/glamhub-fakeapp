'use strict';

services
.factory('ScopeFactory', function() {
	this.form = {};

	this.form.firstName = "";
	this.form.lastName = "";
	this.form.email = "";
	this.form.address1 = "";
	this.form.address2 = "";
	this.form.zipCode = "";
	this.form.creditCard = "";
	this.form.ccExpiration = "";
	this.form.ccSecurityCode = "";

	return this.form;
});

