//page.js
var app =getApp()
Page({
  data: {
    id: 0,
    novel: '等待中...',
    bookMark: []
  },

  //滑动事件
  touchMove: function(event) {
    let bookMark = (wx.getStorageSync('bookMark') || []);
    bookMark[this.data.id] = event.touches[0].pageY;
    wx.setStorageSync('bookMark', bookMark);
  },

  //点击事件,从上次开始看
  tap: function(event) {
    let bookMark = (wx.getStorageSync('bookMark') || []);
    wx.pageScrollTo({
      scrollTop: bookMark[this.data.id] - app.globalData.windowHeight/3
    })
    },

  //页面加载
  onLoad: function (options) {
    var that = this;
    let bookMark = (wx.getStorageSync('bookMark') || []);

    that.setData({
      id: options.id,
      novel: options.novel,
      bookMark: bookMark
    });
  }

})
