import Ember from 'ember';

export default Ember.Route.extend({
     
  actions: {
    pushValue(someVal) {
      console.log(someVal);

      let localObject = this.controller.objectArray;
      localObject.push(someVal);

      console.log(localObject);
    }
  }
});

