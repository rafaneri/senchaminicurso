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
            this.grupoform = Ext.create('NotasErbase.view.GrupoForm');
        }
        this.grupoform.setRecord(record, true);
        this.grupoform.setTitle('Editar Grupo');
        this.getMain().push(this.grupoform);
    },

});
