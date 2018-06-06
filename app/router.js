import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
  });

  this.route('applicants');

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  });
  this.route('clientSideDemo');
});

export default Router;
