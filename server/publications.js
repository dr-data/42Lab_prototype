Meteor.publish('steps', function(skipCount) {
  var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

  Counts.publish(this, 'stepCount', Steps.find(), { 
    noReady: true
  });
  
  return Steps.find({}, {
    limit: parseInt(Meteor.settings.public.recordsPerPage), // records to show per page
    skip: skipCount,
    sort: {step: 1} //sorting the list according to the step number
  });
});