const app = getApp()
Page({
  data: {
    userInfo: wx.getStorageSync('userInfo')
  },

  onLoad: function (options) {
    app.getSettings()
  },
  onShow() {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },
})