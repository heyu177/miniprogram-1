//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg:"北方汉子",
    userInfo:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 页面加载时执行
  onLoad: function () {
    wx.getUserInfo({
      success:(data) => {
        this.setData({
          userInfo:data.userInfo
        });
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
