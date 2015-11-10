/**
* Define o controlador da aplicação
*/
Ext.define('Notas.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    config: { 
        refs: {
            main: 'mainview',
            btnAdd: '#btnAdd',
            grupoform: 'grupoform'
        },

        control: {
            btnAdd: {
                tap: 'onAdd'
            },
            grupoform: {
                salvarGrupo: 'onSalvarGrupo'
            }
        }
    },

    onAdd: function(el, e, eOpts) {
        if (!this.grupoform) {
            this.grupoform = Ext.create('Notas.view.GrupoForm');
        }
        var record = Ext.create('Notas.model.Grupo');
        this.grupoform.setRecord(record);
        this.grupoform.setTitle('Criar Grupo');
        this.getMain().push(this.grupoform);
    },
    
    onSalvarGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.add(record);
        this.getMain().pop();
    },

});
