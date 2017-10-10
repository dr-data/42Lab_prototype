Steps = new Mongo.Collection('steps');

Meteor.methods({
  stepInsert: function(stepAttributes) {
		check(stepAttributes, {
			step: Number,
			description: String,
			graph: String
		});

		Steps.insert(stepAttributes);
	}
});