Meteor.publish('customers', function(skipCount) {
  var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

  Counts.publish(this, 'customerCount', Customers.find({}, {sort: {step: 1}}), { 
    noReady: true
  });
  
  return Customers.find({}, {
    limit: parseInt(Meteor.settings.public.recordsPerPage), // records to show per page
    skip: skipCount
  });
});