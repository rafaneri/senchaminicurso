/**
* Define a view que contem o formulário de notas
*/
Ext.define('Notas.view.NotaForm',{
    extend: 'Ext.Container',
    xtype: 'notaform',
    requires: ['Ext.form.Panel'],
    doSave: function() {

        var formPanel = this.down('formpanel'),
            record = formPanel.getRecord();
        formPanel.updateRecord(record);

        var erros = record.validate();

        if(!erros.isValid()) {
            Ext.Msg.alert('Atenção', 'Verifique os campos obrigatórios.', Ext.emptyFn);
        } else {
            this.fireEvent('salvarNota', record);
        }

    },
    doDelete: function(record) {
        var formPanel = this.down('formpanel'),
            record = formPanel.getRecord(),
            me = this; // infelizmente, mantendo o contexto do escopo

        Ext.Msg.confirm('', 'Deseja mesmo remover a nota?', function (btn) {
            if (btn === 'yes') {
                me.fireEvent('removerNota', record);
            } 
        }); 
    },
    setRecord: function(record, remove) {
        this.down('formpanel').setRecord(record);
        this.down('button[action=doDelete]').setHidden(remove == undefined || !remove);
    },
    config: {
        layout: 'fit',
        title: 'Criar Nota',
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
                            xtype: 'selectfield',
                            label: 'Grupo',
                            name: 'grupo_id',
                            store: 'GrupoStore',
                            valueField: 'id',
                            displayField: 'nome',
                            required: true,
                            defaultPhonePickerConfig : {
                                doneButton : 'Feito',
                                cancelButton : 'Cancelar'
                            }
                        },
                        {
                            xtype: 'textfield',
                            label: 'Título',
                            name: 'titulo',
                            required: true
                        },
                        {
                            xtype: 'textareafield',
                            label: 'Comentário',
                            name: 'comentario',
                            maxRows: 4
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