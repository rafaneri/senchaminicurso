/**
* Define o data store para o objeto Grupo
*/
Ext.define('Notas.store.GrupoStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Notas.model.Grupo',
        autoSync: true,
        autoLoad: true,
        sorters: 'nome',
        proxy: {
            type: 'localstorage',
            id  : 'grupos-locais'
        }
    }
});
