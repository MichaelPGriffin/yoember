import Ember from 'ember';

export default Ember.Controller.extend({


  // "Job applicant" tracker that I'm creating on my own as an exercise:
  applicantName: '', 
  applicantRole: '', 
  applicantSalary: '', 
  /////////////////////////////////////////////////// 

  actions: {
    // Job applicant tracking details that I'm creating as an exercise:
    saveJobApplication() {
      const _name = this.get('applicantName');
      const _position = this.get('applicantRole');
      const _salary = this.get('applicantSalary');

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
