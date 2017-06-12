<template>
    <div class="m-form">
        <Form :model="formItem" :label-width="80">
            <Form-item label="请求地址">
                <Input v-model="formItem.input" placeholder="请输入地址"></Input>
            </Form-item>
            <!--<Form-item label="请求类型">
                <Select v-model="formItem.select" placeholder="请选择">
                    <Option value="POST">POST</Option>
                    <Option value="GET">GET</Option>
                </Select>
            </Form-item>-->

            <Form-item label="请求类型">
                <Radio-group v-model="formItem.select">
                    <Radio label="POST">POST</Radio>
                    <Radio label="GET">GET</Radio>
                </Radio-group>
            </Form-item>

            <Form-item label="type">
                <Input v-model="formItem.type" placeholder="请输入type"></Input>
            </Form-item>
            <Form-item label="serviceCode">
                <Input v-model="formItem.serviceCode" placeholder="请输入serviceCode"></Input>
            </Form-item>
            <Form-item label="domainName">
                <Input v-model="formItem.domainName" placeholder="请输入domainName"></Input>
            </Form-item>
            <Form-item label="data">
                <Input v-model="formItem.data" placeholder="请输入data"></Input>
            </Form-item>
            <Form-item label="token">
                <Input v-model="formItem.token" placeholder="请输入token"></Input>
            </Form-item>

            <Form-item>
                <Button type="primary" @click="handleSubmit">发送请求</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    import $ from "../static/js/jquery.js";

    export default {
        data () {
            return {
                formItem: {
                    input: 'http://10.86.87.112:3003/api/log',
                    token: "26e63f8c-3733-47fa-85ca-95811cf686dd",
                    data: `{value:1, number:2}`,
                    domainName: "测试服务器",
                    type:0,// 错误类型
                    select: 'POST',
                    serviceCode: "GMES-CLIENT-KEYPART013",
                    checkbox: [],
                    switch: true,
                    slider: [20, 50],
                    textarea: ''
                }
            }
        },
        methods: {
            success (nodesc) {
                this.$Notice.success({
                    title: '成功',
                    desc: nodesc ? '' : '模拟请求发送成功！'
                });
            },
            handleSubmit: function() {
                var that = this;
                // debugger
                $.ajax({
                    type: that.formItem.select,
                    url: that.formItem.input,
                    data: {
                        data: that.formItem.data,
                        domainName: that.formItem.domainName,
                        token: that.formItem.token,
                        type: that.formItem.type,
                        serviceCode: that.formItem.serviceCode
                    },
                    success: function() {
                        that.success(false);                    }
                });
            }
        }
    }
</script>
<style>
    .m-form {
        width: 700px;
        margin: 0 auto;
        margin-top: 20px;
    }

</style>


<!--type:{type: Number},
serviceCode: {type: String},
domainName: {type: String},
data : {},
token : {type: String},-->