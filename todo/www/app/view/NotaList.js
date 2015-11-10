/**
* Define a view que contem a lista de notas
*/
Ext.define('Notas.view.NotaList',{
    extend: 'Ext.dataview.List',
    xtype: 'notalist',
    requires: ['Notas.model.Nota'],
    doNotaTap: function(list, index, target, record, e, eOpts) {
                
        this.fireEvent('exibirNota', list, index, target, record, e, eOpts);
        /*
        * Remover a seleção após o clique (truque)
        */
        setTimeout(function() {
            list.deselect(index);
        }, 500);

    },
    config: {
        allowDeselect: true,
        itemTpl: [
            '<div class="notas">{titulo}</div>'
        ].join(''),
        grouped: true,
        listeners: {
            itemtap: 'doNotaTap'
        }
    }
});