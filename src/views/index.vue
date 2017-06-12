<template>
    <Table height="700" border :columns="columns1" :data="data1"></Table>
</template>
<script>
    import $ from "../static/js/jquery.js";
    
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'domainName',
                        key: 'domainName',
                        className: "demo-table-info-cell-address"
                    },
                    {
                        title: 'serviceCode',
                        key: 'serviceCode',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'token',
                        key: 'token'
                    },
                    {
                        title: 'data',
                        key: 'data'
                    },
                    {
                        title: 'date',
                        key: 'date',
                        className: 'demo-table-info-cell-age'
                    }
                ],
                data1: []
            }
        },
        methods: {
            getData: function() {
                var that = this;
                $.ajax({
                    url: "http://10.86.87.112:3003/api/log",
                    type: "GET",
                    success: function(resp) {
                        if (resp.success === true) {
                            that.data1 = resp.content;
                        }
                        console.log(resp)
                    }
                });
            }
        },
        created: function() {
            this.getData();
        }        
    }
</script>
<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table td.demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table td.demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>