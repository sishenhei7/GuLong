//list.js
const novel1 = require('../../utils/novel1.js')
const novel2 = require('../../utils/novel2.js')

Page({
  data: {
    novel1: '加载中',
    novel2: '加载中',
    novelMes1: '加载中',
    novelMes2: '加载中'
  },

  onLoad: function () {
    this.setData({
      novel1: novel1,
      novel2: novel2,
      novelMes1: '流星蝴蝶剑',
      novelMes2: '萧十一郎'
    })
  }
})
