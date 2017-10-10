Template.addStep.events({
  'submit form': function(e) {
    e.preventDefault();

    var step = {
      step: parseInt($(e.target).find('[name=step]').val()),
      description: $(e.target).find('[name=description]').val(),
      graph: $(e.target).find('[name=graph]').val()
    };

    Meteor.call('stepInsert', step, function(error, result) {    
    	if (error) {
        alert(error);
        return false;
      }     

    	Router.go('listSteps');      
    });
  },
  'click #btnStepsList': function(e) {
    e.preventDefault();

    Router.go('listSteps');
  }
});