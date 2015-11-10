/**
* Define a view principal da aplicação
*/
Ext.define('Notas.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: "mainview",
    config: {
        autoDestroy: false,
        fullscreen: true,
        defaultBackButtonText: 'Voltar',
        useTitleForBackButtonText: false,
        layout: {
            type: 'card'
        },
        navigationBar: {
            id: 'mainTitleBar',
            androidAnimation: false,
            items: [
                {
                    xtype: 'button',
                    id: 'btnAdd',
                    iconCls: 'add',
                    align:'right'
                }
            ]
        }
    }
});