

Ext.Loader.setConfig({
    paths: {
        Ext: '../js'
    }
});
Ext.application({

    name: 'Notas',
    requires: [],
    controllers: [],
    views: ['Notas.view.Main'],

    launch: function() {
        var main = Ext.create('Notas.view.Main', {fullscreen: true});
    }

});