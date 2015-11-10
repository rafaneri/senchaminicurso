/**
* Define o controlador da aplicação
*/
Ext.define('Notas.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    config: { 
        refs: {
            main: 'mainview',
            btnAdd: '#btnAdd'
        },

        control: {
            btnAdd: {
                tap: 'onAdd'
            }
        }
    },

    onAdd: function(el, e, eOpts) {
        if (!this.grupoform) {
            this.grupoform = Ext.create('Notas.view.GrupoForm');
        }
        this.grupoform.setTitle('Criar Grupo');
        this.getMain().push(this.grupoform);
    },

});
