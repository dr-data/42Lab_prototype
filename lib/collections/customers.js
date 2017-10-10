Customers = new Mongo.Collection('customers');

Meteor.methods({
  customerInsert: function(customerAttributes) {
		check(customerAttributes, {
			step: Number,
			description: String,
			email: String
		});

		Customers.insert(customerAttributes);
	}
});