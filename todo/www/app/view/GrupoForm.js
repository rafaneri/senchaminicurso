/**
* Define a view que contem o formulário de grupos
*/
Ext.define('Notas.view.GrupoForm',{
    extend: 'Ext.Container',
    xtype: 'grupoform',
    requires: ['Ext.form.Panel'],
    config: {
        layout: 'fit',
        title: 'Criar Grupo',
        items: [{
            xtype: 'formpanel',
            items: [
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelWidth: '30%'
                    },
                    title: 'Dados',
                    items: [
                        {
                            xtype: 'textfield',
                            label: 'Nome',
                            name: 'nome',
                            required: true
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text: 'Gravar',
                    margin: 10
                },
                {
                    xtype: 'button',
                    ui: 'decline',
                    text: 'Remover',
                    margin: 10
                }
            ]
        }]
    }
});