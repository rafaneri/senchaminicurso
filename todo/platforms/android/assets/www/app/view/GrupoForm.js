/**
* Define a view que contem o formulário de grupos
*/
Ext.define('Notas.view.GrupoForm',{
    extend: 'Ext.Container',
    xtype: 'grupoform',
    requires: ['Ext.form.Panel'],
    doSave: function() {

        var formPanel = this.down('formpanel'),
            record = formPanel.getRecord();
        formPanel.updateRecord(record);

        var erros = record.validate();

        if(!erros.isValid()) {
            Ext.Msg.alert('Atenção', 'Verifique os campos obrigatórios.', Ext.emptyFn);
        } else {
            this.fireEvent('salvarGrupo', record);
        }

    },
    doDelete: function(record) {
        var formPanel = this.down('formpanel'),
            record = formPanel.getRecord(),
            me = this; // infelizmente, mantendo o contexto do escopo

        Ext.Msg.confirm('', 'Deseja mesmo remover o grupo?', function (btn) {
            if (btn === 'yes') {
                me.fireEvent('removerGrupo', record);
            } 
        }); 
    },
    setRecord: function(record, remove) {
        this.down('formpanel').setRecord(record);
        this.down('button[action=doDelete]').setHidden(remove == undefined || !remove);
    },
    config: {
        layout: 'fit',
        title: 'Criar Grupo',
        control: {
            "button[action=doSave]": {
                tap: 'doSave'
            },
            "button[action=doDelete]": {
                tap: 'doDelete'
            }
        },
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
                    margin: 10,
                    action: 'doSave'
                },
                {
                    xtype: 'button',
                    ui: 'decline',
                    text: 'Remover',
                    margin: 10,
                    action: 'doDelete',
                    hidden: true
                }
            ]
        }]
    }
});