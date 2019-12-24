
Page({
  data: {
    time: 10
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //5s后跳转
    this.data.Time = setInterval(() => {
      this.setData({
        time: --this.data.time
      })
      if (this.data.time <= 0) {
        clearInterval(this.data.Time)
        this.goHome()
      }
    }, 1000)
  },
  goHome() {
    clearInterval(this.data.Time)
    wx.reLaunch({
      url: '../index/index'
    })
  },
})