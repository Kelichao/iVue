<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
		background: url("/src/static/images/EVUN_logo.png") no-repeat center center;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 600px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 480px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
        padding-top:0px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    /*.ivu-menu-horizontal {
        height:80px;
        line-height:80px;
    }*/
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    易云--前端数据可视化平台
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    <a href="https://github.com/Kelichao"  target="_Blank"> 联系我们--github</a>
                </Menu-item>			
            </div>
        </Menu>
        <Menu mode="horizontal" v-bind:active-name="nowHash" @on-select="changeFunction">
            <div class="layout-assistant">
                <router-link to="/type"><Menu-item name="type">图表展示</Menu-item></router-link>
                <router-link to="/index"><Menu-item name="index">表格展示</Menu-item></router-link>
                <router-link to="/frontPage"><Menu-item name="frontPage">前端页面报错</Menu-item></router-link>
				<router-link to="/form"><Menu-item name="form">模拟数据</Menu-item></router-link>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-1" width="auto" :open-names="['1']" theme="dark">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                展示模式
                            </template>
                            <Menu-item name="1-1">表格</Menu-item>
                            <Menu-item name="1-2">图表</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                时间分布
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                错误分布
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">
                        <router-view></router-view><!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
                    </div>
                </i-col>
                
                <!--<Spin size="large" fix v-if="spinShow"></Spin>-->
            </Row>
        </div>
		

		          <!--<div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>-->
    </div>
</template>
<script>
    import $ from "./static/js/jquery.js";


    $.ajaxSetup({
        beforeSend: function() {

        },
        complete: function() {

        }
    });


    export default {
		data: function() {
			return {
				nowHash:"type",
                spinShow: true
			}
		},
        created: function() {
            this.nowHash =  window.location.hash.substring(2);
        },
        methods: {
			changeFunction: function(name) {
                //console.log(22222)
				// backErr frontErr simuErr
				// console.log(name)
			}
		}
    }
</script>