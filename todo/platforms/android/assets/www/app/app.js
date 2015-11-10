

Ext.Loader.setConfig({
    paths: {
        Ext: '../js'
    }
});
Ext.application({

    name: 'Notas',
    requires: [],
    controllers: [],
    views: [],

    launch: function() {
        Ext.Msg.alert('FACAPE', 'Estamos prontos, vamos lá!', Ext.emptyFn);
    }

});