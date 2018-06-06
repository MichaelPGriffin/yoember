import Ember from 'ember';
import set from 'ember';

export default Ember.Route.extend({

  model() {

    return this.store.findAll('library');
  },

  actions: {
   
    deleteLibrary(library)  {
      let confirmation = confirm('Are you sure');
 
      if (confirmation) {
        library.destroyRecord();
      }
    }
  }
});
