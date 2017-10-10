Customers = new Mongo.Collection('customers');

Meteor.methods({
  customerInsert: function(customerAttributes) {
		check(customerAttributes, {
			step: String,
			surname: String,
			email: String
		});

		Customers.insert(customerAttributes);
	}
});