import Ember from 'ember';

export default Ember.ObjectController.extend({
  isValid: Ember.computed('nombre', 'direccion', function(){
      return !Ember.isEmpty(this.get('nombre')) &&
        !Ember.isEmpty(this.get('direccion'));
    }
  ),
  actions: {
    save: function(){
      if(this.get('isValid')){
        var _this = this;
        this.get('model').save().then(function(empresa){
          _this.transitionToRoute('empresas.show', empresa);
        });
      } else {
        this.set('errorMessage', 'Debe llenar todos los campos');
      }
    }
  }
});
