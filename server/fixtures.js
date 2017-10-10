// Fixture data
Meteor.startup(function() {
	if (Steps.find().count() === 0) {
		Steps.insert({
			step: 1,
		  	description: "STEP1",
		  	graph: 'freddy@example.com'
		});
		Steps.insert({
			step: 2,
		  	description: "STEP1",
		  	graph: 'freddy@example.com'
		});
		Steps.insert({
			step: 3,
		  	description: "STEP1",
		  	graph: 'freddy@example.com'
		});
		Steps.insert({
			step: 4,
		  	description: "STEP1",
		  	graph: 'freddy@example.com'
		});
		Steps.insert({
			step: 5,
		  	description: "STEP1",
		  	graph: 'freddy@example.com'
		});
	}
});