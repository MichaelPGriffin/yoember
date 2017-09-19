import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('applicants');
  },

  actions: {
    // Job applicant tracking details that I'm creating as an exercise:
    saveJobApplication_RouteAction() {
      const _name = this.get('applicantName');
      const _position = this.get('applicantRole');
      const _salary = this.get('applicantSalary');

      alert('Calling the route action!');

      const newApplicant = this.store.createRecord('applicants', { 
            name: _name, 
            position: _position,
            salary: _salary
      });
    
      newApplicant.save().then(() => {
        this.set('applicantName', '');
        this.set('applicantRole', '');
        this.set('applicantSalary', '');
      });
    }
  }
});
