Template.listSteps.onCreated(function() {
  var template = this;

  template.autorun(function() {
    var skipCount = (currentPage() - 1) * Meteor.settings.public.recordsPerPage;
    template.subscribe('steps', skipCount);
  });
});

Template.listSteps.helpers({
  steps: function() {
    return Steps.find({}, {sort: {step: 1}}).fetch();
  },
  prevPage: function() {
    var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;
    return Router.routes.listSteps.path({page: previousPage});
  },
  nextPage: function() {
    var nextPage = hasMorePages() ? currentPage() + 1 : currentPage();
    return Router.routes.listSteps.path({page: nextPage});
  },

  //CSS class for next and previous button
  // if currentPage is less than 1 page, then show disabled, otherwise nth happen
  prevPageClass: function() {
    return currentPage() <= 1 ? "disabled" : "";
  },
  //CSS class for next and previous button
  // if hasMorePage, then show nth, otherwise disabled
  nextPageClass: function() {
    return hasMorePages() ? "" : "disabled";
  }
});


// when click button in the add customer page, it back the list
Template.listSteps.events({
  'click #btnAddStep': function(e) {
    e.preventDefault();

    Router.go('addStep');
  }
});

var hasMorePages = function() {
  var totalSteps = Counts.get('stepCount');
  return currentPage() * parseInt(Meteor.settings.public.recordsPerPage) < totalSteps;
}

var currentPage = function() {
  return parseInt(Router.current().params.page) || 1; 
}