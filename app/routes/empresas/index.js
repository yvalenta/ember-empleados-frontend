import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('empresa');
  },
  actions: {
    delete: function(empresa) {
      empresa.destroyRecord();
      return false;
    }
  }
});
