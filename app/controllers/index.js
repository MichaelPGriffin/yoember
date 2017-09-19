import Ember from 'ember';

export default Ember.Controller.extend({

  //   isDisabled: Ember.computed('emailAddress', function() {
  //     return this.get('emailAddress' === '');
  //   }),
  
  /////////////////////////////////////////////////// 
  // "Job applicant" tracker that I'm creating on my own as an exercise:
  applicantName: '', 
  applicantRole: '', 
  applicantSalary: '', 
  /////////////////////////////////////////////////// 


  emailAddress: '',

  messageText: '',
  
  isDisabled: Ember.computed.empty('emailAddress'),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isAllowedToMessage: Ember.computed('messageText', function() {
    
    if(this.get('messageText') != '' && this.get('isValid')) {
      return false;
    }
 
    return true;
  }),

  // Computed properties are called when the property of interest is used.
  //   actualEmailAddress: Ember.computed('emaiAddress', function(){
  //     console.log('Calling the actualEmailAddress computed property:');
  //     console.log(`email address is now: ${this.get('emailAddress')}`);
  //   }),
  // 
  //   // Observers will always be called when the value of the observed property changes.
  //   emailAddressChanged: Ember.observer('emaiAddress', function(){
  //     console.log('Calling the emailAddressChanged observer:');
  //     console.log(`Per observer, email address is now: ${this.get('emailAddress')}`);
  //   }),

  //   messageTextChanged: Ember.observer('messageText', function() {
  //     
  //   }),


  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      // This is how you interact with the "invitation" model.
      const newInvitation = this.store.createRecord('invitation', { 
            email: email
      });

      // The newInvitation obect gets the save() promise called on it.  I believe then the model & config settings send
      // the promise to the Firebase DB, persisting the record.  Later on, when you go to the Invitations page, you will
      // see the table rendered there.  The template refers to the `invitation` model as a property on the app controller.
      // The invitation property has an `id` (which I think is just implicit) as well as an `email` property that is defined
      // in the `invitation` model.
      // 
      // Note - according to the Yoember tutorial, "The id comes from our database. You can use it in the response message."
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

      /////////////////////////////////////////////////////////////////////////////////////////////////////      
      // The above implements the save() promise to handle the result of updating an
      // email address after saving the new invitation.  Before implementing the
      // promise, just had the following:
      /*
      // Note this "responseMessage" variable just exists on the controller, as it was just
      // assigned during the execution of this saveInvitation() action.
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      */
      ////////////////////////////////////////////////////////////////////////////////////////////////////
    },

    // Likely don't need this anymore:
    sendMessage() {
      const _emailAddress = this.get('emailAddress');
      const _messageText = this.get('messageText');

      this.set('feedbackMessage', `We will consider your feedback that: "${this.get('messageText')}"`);

      const newContact = this.store.createRecord('contact', { 
            email: _emailAddress,
            message: _messageText
      });
    
      newContact.save().then((response) => {
        alert('You message has been submitted :-) ');
        alert(`The response id is ${response.get('id')}`);
 
        this.set('emailAddress', '');
        this.set('messageText', '');
      });
      
      this.set('messageText', '');
    },

    //////////////////////////////////////////////////////////////////////
    // Job applicant tracking details that I'm creating as an exercise:
    saveJobApplication() {
      const _name = this.get('applicantName');
      const _position = this.get('applicantRole');
      const _salary = this.get('applicantSalary');

      alert(_name);

      const newApplicant = this.store.createRecord('applicants', { 
            name: _name, 
            position: _position,
            salary: _salary
      });
    
      newApplicant.save().then((response) => {
        alert('You application has been submitted :-) ');
        alert(`The response id is ${response.get('id')}`);
 
        this.set('applicantName', '');
        this.set('applicantRole', '');
        this.set('applicantSalary', '');
      });
    }
    //////////////////////////////////////////////////////////////////////
  }
});
