/**
* Define o data store para o objeto Nota
*/
Ext.define('Notas.store.NotaRemotaStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Notas.model.Nota',
        sorters: [{property: 'id', direction: 'DESC'}],
        grouper: {
            groupFn: function(record) {
                return record.getGrupo().get('nome');
            },
            sortProperty: 'grupo_id'
        },
        autoLoad: true,
        proxy: {
            type: 'rest',
            url  : 'http://162.243.53.75:3200/api/notas'
        }
    }
});
