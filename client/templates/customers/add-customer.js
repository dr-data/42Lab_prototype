Template.addCustomer.events({
  'submit form': function(e) {
    e.preventDefault();

    var customer = {
      step: $(e.target).find('[name=step]').val(),
      surname: $(e.target).find('[name=lastName]').val(),
      email: $(e.target).find('[name=email]').val()
    };

    Meteor.call('customerInsert', customer, function(error, result) {    
    	if (error) {
        alert(error);
        return false;
      }     

    	Router.go('listCustomers');      
    });
  },
  'click #btnCustomersList': function(e) {
    e.preventDefault();

    Router.go('listCustomers');
  }
});