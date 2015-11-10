/**
* Define o controlador da aplicação
*/
Ext.define('Notas.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    config: { 
        refs: {
            main: 'mainview',
            btnAdd: '#btnAdd',
            grupoform: 'grupoform',
            grupolist: 'grupolist',
        },

        control: {
            btnAdd: {
                tap: 'onAdd'
            },
            grupoform: {
                salvarGrupo: 'onSalvarGrupo',
                removerGrupo: 'onRemoverGrupo'
            },
            grupolist: {
                exibirGrupo: 'onExibirGrupo'
            },
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
    
    onRemoverGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.remove(record);
        this.getMain().pop();
    },
    
    onExibirGrupo: function(list, index, node, record) {
        if (!this.grupoform) {
            this.grupoform = Ext.create('Notas.view.GrupoForm');
        }
        this.grupoform.setRecord(record, true);
        this.grupoform.setTitle('Editar Grupo');
        this.getMain().push(this.grupoform);
    },

});
