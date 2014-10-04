import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('empresas', function() {
    this.route('new');
    this.route('show', {path: ':empresa_id' });
    this.route('edit', {path: ':empresa_id/edit' });
  });

});

export default Router;
