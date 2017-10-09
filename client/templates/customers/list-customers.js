Template.listCustomers.onCreated(function() {
  var template = this;

  template.autorun(function() {
    var skipCount = (currentPage() - 1) * Meteor.settings.public.recordsPerPage;
    template.subscribe('customers', skipCount);
  });
});

Template.listCustomers.helpers({
  customers: function() {
    return Customers.find();
  },
  prevPage: function() {
    var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;
    return Router.routes.listCustomers.path({page: previousPage});
  },
  nextPage: function() {
    var nextPage = hasMorePages() ? currentPage() + 1 : currentPage();
    return Router.routes.listCustomers.path({page: nextPage});
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

Template.listCustomers.events({
  'click #btnAddCustomer': function(e) {
    e.preventDefault();

    Router.go('addCustomer');
  }
});

var hasMorePages = function() {
  var totalCustomers = Counts.get('customerCount');
  return currentPage() * parseInt(Meteor.settings.public.recordsPerPage) < totalCustomers;
}

var currentPage = function() {
  return parseInt(Router.current().params.page) || 1; 
}