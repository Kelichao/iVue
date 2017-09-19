<style  lang="less" scoped> 
.login-screen-content {
    position: absolute;
    height: 100%;
    width: 100%;
}
 
.login-screen-content {
    background: url('/src/static/images/login_bg.jpg') center;
    background-size: cover;
}

.login-panel {
    background: #fff;
    border-radius: 2px;
    min-width: 310px;
    min-height: 310px;
    position: relative;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
}

.login-panel:after {
    display: block;
    content: '';
    background: url('/src/static/images/login_form_top.png') no-repeat;
    background-size: 100%;
    height: 16px;
    position: absolute;
    top: -14px;
    left: 0;
    width: 100%;
}

.login-panel-inner {
    border: #1a406e solid 5px;
    border-radius: 2px;
    height: 100%;
    width: 100%;
    padding: 20px;
    min-width: 310px;
    min-height: 310px;
}

.login-input {
    border: rgb(215, 215, 215) solid 1px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.75);
    margin-bottom: 10px;

}

.login-input input {
        border: none;
        padding: 0 10px;
        font-size: 14px;
        height: 42px;
        width: 100%;
    }

.login-copyright {
    color: #fff;
    opacity: 0.5;
    font-size: 12px;
    height: 80px;
}

.avatar {
    border-radius: 50%;
    background-color:white;
    background-image: url('/src/static/images/avatar.png');
    background-repeat:  no-repeat;
    background-size: 48px 48px;
    border: #6a7897 solid 3px;
    width: 52px;
    height: 52px;
    position: relative;


}

.avatar img {
    width: 100%;
}

#loginButton{
    transition: all 1s;
    text-shadow: 0px 0px 19px white;
}

#loginButton:hover {
    box-shadow: 1px 1px 4px 2px #9f9e9e;
    background-color: #075694;
    color: #e0e6eb;
}

#loginName {
    background: url("/src/static/images/login-name-bg.png") 95% center no-repeat;
    -webkit-text-fill-color: #555;
}

#loginPsw {
    background: url(/src/static/images/login-psw-bg.png) 95% center no-repeat;
    -webkit-text-fill-color: #555;
}

#particles-js{
    width: 100%;
    height: 98%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: absolute;
    top:0;
    z-index:-1;
    opacity: 0.5;
}

.input-shine {
    animation-name: inputShine;   
    animation-duration: 2s;  
    animation-iteration-count: infinite;   
    transition: all 1s;
}

@-webkit-keyframes  inputShine {  
    0% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    }
    50% {
        box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.3);
    }
    100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    } 
}
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
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

    .layout-nav {
        width: 600px;
        margin: 0 auto;
    }

    .layout-assistant {
        width: 480px;
        margin: 0 auto;
        height: inherit;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
        padding-top: 0px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div v-if="isLogin === true" class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    易云--前端数据可视化平台
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    <a href="https://github.com/Kelichao" target="_Blank"> 联系我们--github</a>
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" v-bind:active-name="nowHash" @on-select="changeFunction">
            <div class="layout-assistant">
                <router-link to="/type">
                    <Menu-item name="type">图表展示</Menu-item>
                </router-link>
                <router-link to="/index">
                    <Menu-item name="index">表格展示</Menu-item>
                </router-link>
                <router-link to="/frontPage">
                    <Menu-item name="frontPage">前端页面报错</Menu-item>
                </router-link>
                <router-link to="/form">
                    <Menu-item name="form">模拟数据</Menu-item>
                </router-link>
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
                        <router-view></router-view>
                        <!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
                    </div>
                </i-col>

                <!--<Spin size="large" fix v-if="spinShow"></Spin>-->
            </Row>
        </div>


        <!--<div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>-->
    </div>
    <div v-else class="layout">

        <div sw-role="cell" sw-mode="y" class="login-screen-content">
            <div sw-role="cell" sw-layout="fit" sw-align="center" sw-valign="middle">
                <div class="login-panel input-shine" sw-role="cell">

                    <div class="login-panel-inner" sw-role="cell" sw-layout="fit" sw-mode="y">
                        <div sw-role="cell" sw-align="center">
                            <div class="avatar"></div>
                        </div>
                        <div sw-role="cell" sw-align="center" class="f-mt10 f-mb10 font-16">iME-Client管理系统</div>
                        <Form ref="formInline" :model="formInline" :rules="ruleInline">
                                <FormItem prop="user">
                                    <Input type="text" v-model="formInline.user" placeholder="用户名">
                                        
                                    </Input>
                                </FormItem>
                                <FormItem prop="password">
                                    <Input type="password" v-model="formInline.password" placeholder="密码">
                                        
                                    </Input>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
                                </FormItem>
                            </Form>
                        <!-- <form class="ajax-submit-onchange" id="loginForm">
                            <div sw-role="cell" class="login-input">
                                <div sw-role="cell" sw-layout="fit" class="item-input">
                                    <input type="text" name="username" id="loginName" placeholder="" data-i18n-placeholder="LOGIN.T.USERNAME">
                                </div>
                                <div sw-role="cell">
                                </div>
                            </div>
                            <div sw-role="cell" class="login-input">
                                <div sw-role="cell" sw-layout="fit" class="item-input">
                                    <input type="password" name="password" id="loginPsw" placeholder="" data-i18n-placeholder="LOGIN.T.PASSWORD">
                                </div>
                                <div sw-role="cell">
                                </div>
                            </div>
                            <div sw-role="cell">
                                <Button type="primary" size="large" long>登录</Button>
                            </div>
                        </form> -->

                        <div sw-role="cell" sw-mode="x-equal" class="margin-t-15 margin-b-10">
                            <div sw-role="cell">
                                <a href="#" id="forgetUser" data-i18n="LOGIN.B.FORGET_PASSWORD"></a>
                            </div>
                            <div sw-role="cell" sw-align="right">
                                <a href="#" id="loginChangeLang" data-i18n="LOGIN.B.SWITCH_LANGUAGE"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div sw-role="cell" sw-align="center" sw-valign="middle" class="login-copyright">©2017 杭州吉利易云科技有限公司 版权所有</div>
            <div id="particles-js"></div>
        </div>
    </div>
</template>
<script>
    /*
    * @name: \src\less\themes\client_loginPanel.less
    * @url: http://git.evun.cn/GMES/GMES_CLIENT_PAD
    * @author: EVUN前端组
    * @modify: kelichao
    * @update: 2017-06-13
    * @decript: 登录页面样式
    */ 
    import $ from "./static/js/jquery.js";


    $.ajaxSetup({
        beforeSend: function () {

        },
        complete: function () {

        }
    });


    export default {
        data: function () {
            return {
                nowHash: "type",
                spinShow: true,
                isLogin: false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        created: function () {
            this.nowHash = window.location.hash.substring(2) || "type";
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            changeFunction: function (name) {
                //console.log(22222)
                // backErr frontErr simuErr
                // console.log(name)
            }
        }
    }

</script>