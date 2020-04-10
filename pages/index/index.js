//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg:"北方汉子",
    userInfo:{},
    isShow:true
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  handleGetUserInfo(data){
    if (data.detail.rawData) {
      // 用户点击的是允许
      this.getUserInfo();
    }
  },
  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        if (data.authSetting["scope.userInfo"]) {
          // 已经授权
          this.setData({
            isShow:false
          });
        }else{
          // 没有授权
          this.setData({
            isShow:true
          });
        }
      },
    })
    wx.getUserInfo({
      success:(data) => {
        this.setData({
          userInfo:data.userInfo
        });
      }
    })
  },
  // 页面加载时执行
  onLoad: function () {
    this.getUserInfo();
  },
  
})
