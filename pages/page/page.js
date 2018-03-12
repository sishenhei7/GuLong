

Page({
  data: {
    novel: '等待中...'
  },

  //滑动事件
  touchMove: function(event) {
      wx.setStorageSync('scrollHeight', event.touches[0].pageY);
      let scrollHeight = (wx.getStorageSync('scrollHeight') || 0);
      console.log(event.touches[0].pageY);
    },

  //页面加载
  onLoad: function (options) {
    this.setData({
      novel: options.novel,
    });

    //滚动页面到上次退出位置
    let scrollHeight = (wx.getStorageSync('scrollHeight') || 0);
    console.log(scrollHeight);
    wx.pageScrollTo({
      scrollTop: scrollHeight,
      duration: 300
    })
  }
})
