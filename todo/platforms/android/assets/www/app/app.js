

Ext.Loader.setConfig({
    paths: {
        Ext: '../js'
    }
});
Ext.application({

    name: 'Notas',
    requires: [],
    stores: ['Notas.store.GrupoStore'],
    controllers: ['Notas.controller.ApplicationController'],
    views: ['Notas.view.Main'],

    launch: function() {
        var main = Ext.create('Notas.view.Main', {fullscreen: true});
    }

});