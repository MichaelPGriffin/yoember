import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  salary: DS.attr('string')
});
