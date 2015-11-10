/**
* Define o controlador da aplicação
*/
Ext.define('Notas.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    config: { 
        // mantém o titulo da view antes de sair para o form
        currentTitle: '',
        refs: {
            main: 'mainview',
            tabnavigation: 'maintabnavigation',
            btnAdd: '#btnAdd',
            grupoform: 'grupoform',
            grupolist: 'grupolist',
        },

        control: {
            main: {
                back: 'onMainBack'
            },
            tabnavigation:{
                tabItemChange: 'onTabItemChange'
            },
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

    onMainBack: function(view, item) {
        this.setMainTitle(this.getCurrentTitle());
    },
    
    onTabItemChange: function(el, value, oldValue, eOpts) {
        var text = value.tab.getTitle();
        this.setMainTitle(text);
    },
    
    getMainTitle: function() {
        var mainTitleBar = this.getMain().getNavigationBar();
        return mainTitleBar.getTitle();
    },

    setMainTitle: function(title) {
        var mainTitleBar = this.getMain().getNavigationBar();
        mainTitleBar.setTitle(title);
    },

    onAdd: function(el, e, eOpts) {
        this.getMain().push(this.createForm());
    },
    
    createForm: function() {
        var form,
            record;
        this.setCurrentTitle(this.getMainTitle());
        if(this.getActiveTab() == 'grupolist') {
            if (!this.grupoform) {
                this.grupoform = Ext.create('Notas.view.GrupoForm');
            }
            this.grupoform.setTitle('Criar Grupo');
            form = this.grupoform;
            record = Ext.create('Notas.model.Grupo');
        } else if(this.getActiveTab() == 'notalist') {
            if (!this.notaform) {
                this.notaform = Ext.create('Notas.view.NotaForm');
            }
            this.notaform.setTitle('Criar Nota');
            form = this.notaform;
            record = Ext.create('Notas.model.Nota');
        }
        form.setRecord(record);
        return form;
    },

    getActiveTab: function() {
        return this.getMain().getActiveItem().getActiveItem().xtype;
    },
    
    onSalvarGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.add(record);
        this.getMain().pop();
        this.setMainTitle(this.getCurrentTitle());
    },
    
    onRemoverGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.remove(record);
        this.getMain().pop();
        this.setMainTitle(this.getCurrentTitle());
    },
    
    onExibirGrupo: function(list, index, node, record) {
        this.setCurrentTitle(this.getMainTitle());
        if (!this.grupoform) {
            this.grupoform = Ext.create('Notas.view.GrupoForm');
        }
        this.grupoform.setRecord(record, true);
        this.grupoform.setTitle('Editar Grupo');
        this.getMain().push(this.grupoform);
    },

});
