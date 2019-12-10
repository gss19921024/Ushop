import requestUrl from './utils/util.js'

App({
    onLaunch: function () {
        this.checkout()
    },
    //检验code
    checkout: function () {
        wx.checkSession({
            success: function() {
                console.log("未过期",wx.getStorageSync('token'))
            },
            fail: function() {
                console.log("过期了",wx.getStorageSync('token'))
                wx.login({
                    success: res => {
                        if (res.code) {
                            console.log('code', res.code)
                            requestUrl.requestUrl({
                                url: "/user/wxapp/login",
                                params: {
                                    code: res.code,
                                    type: '2'
                                }
                            }).then((res) => {
                                wx.setStorageSync('openId', res.data.data.openid);
                                wx.setStorageSync('token', res.data.data.token);
                            }).catch((errorMsg) => {
                                console.log(errorMsg)
                            })
                        }
                    }
                })
            }
        })
    },
    //检验授权的方法
    getSettings:function () {
        let that = this
        wx.getSetting({
            success: (res) => {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: (res) => {

                        }
                    })
                } else {
                    wx.redirectTo({
                        url: '../authorize/authorize',//授权页面
                    })
                }
            }
        })
    },
    globalData: {
        userInfo: "",//用户信息
        openId: "",//登录用户的唯一标识
        appid: 'wxe7c4ac8324f60b85',//appid
        AppSecret: '36664aed140798ec8a5aacbc77b18ff8',//secret秘钥
        token: ''
    },
    onHide: function () {//小程序退出时触发的事件
        console.log("小程序完全退出了")
    }
})