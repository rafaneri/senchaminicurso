/**
* Define a view que contem as tabs
*/
Ext.define('Notas.view.MainTabNavigation', {
    extend: 'Ext.tab.Panel',
    xtype: "maintabnavigation",
    requires: ['Notas.view.GrupoList'],
    doActiveItemChange: function(el, value, oldValue, eOpts) {
                
        this.fireEvent('tabItemChange', el, value, oldValue, eOpts);

    },
    config: {
        ui: 'light',
        tabBar: {
            layout: {
                pack : 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Notas Locais',
                html: 'Notas Locais',
                iconCls: 'bookmarks',
                cls: 'card'
            },
            {
                title: 'Notas Remotas',
                html: 'Notas Remotas',
                iconCls: 'locate',
                cls: 'card'
            },
            {
                title: 'Grupos',
                xtype: 'grupolist',
                store: 'GrupoStore',
                iconCls: 'settings',
                cls: 'card'
            }
        ],
        listeners: {
            activeitemchange: 'doActiveItemChange'
        }
    }
});