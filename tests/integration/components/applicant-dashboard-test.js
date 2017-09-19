import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('applicant-dashboard', 'Integration | Component | applicant dashboard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{applicant-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#applicant-dashboard}}
      template block text
    {{/applicant-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
