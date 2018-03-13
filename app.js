//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //获取设备信息，从而获取手机屏幕高度
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log('屏幕高度为' + res.windowHeight)
        that.globalData.windowHeight = res.windowHeight
      }
    })
  },
  globalData: {
    windowHeight: 0
  }
})
