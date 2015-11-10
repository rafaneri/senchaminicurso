/**
* Define a aplicação sencha touch
*/
var MB = Ext.MessageBox;
Ext.apply(MB, {
        YES: { text: 'Sim', itemId: 'yes', ui: 'action' },
        NO: { text: 'Não', itemId: 'no' }
});
Ext.apply(MB, {
        YESNO: [MB.NO, MB.YES]
});
Ext.Loader.setConfig({
    paths: {
        Ext: '../js'
    }
});
Ext.application({

    name: 'Notas',
    requires: [],
    stores: [
        'Notas.store.GrupoStore',
        'Notas.store.NotaLocalStore',
        'Notas.store.NotaRemotaStore'],
    controllers: ['Notas.controller.ApplicationController'],
    views: ['Notas.view.Main'],

    launch: function() {
        var main = Ext.create('Notas.view.Main', {fullscreen: true});
    }

});