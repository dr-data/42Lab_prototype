Steps = new Mongo.Collection('steps');

Meteor.methods({
  stepInsert: function(stepAttributes) {
		check(stepAttributes, {
			step: Number,
			description: String,
			email: String
		});

		Steps.insert(stepAttributes);
	}
});