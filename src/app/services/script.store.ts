
 interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [

    {name: 'global', src: './assets/assetsdash/vendor/global/global.min.js'},
    {name: 'select', src: './assets/assetsdash/vendor/bootstrap-select/dist/js/bootstrap-select.min.js'},
    {name: 'dataTables', src: './assets/assetsdash/vendor/datatables/js/jquery.dataTables.min.js'},
    {name: 'datatablesIni', src: './assets/assetsdash/js/plugins-init/datatables.init.js'},
    {name: 'custom', src: './assets/assetsdash/js/custom.min.js'},
    {name: 'deznav', src: './assets/assetsdash/js/deznav-init.js'},
    {name: 'demo', src: './assets/assetsdash/js/demo.js'}
];