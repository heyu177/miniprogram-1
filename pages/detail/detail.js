// pages/detail/detail.js
let datas = require("../../datas/list-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    // 是否收藏
    isCollected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    this.setData({
      detailObj: datas.list_data[index],
      index
    });
    // 获取本地缓存数据
    let detailStorage=wx.getStorageSync('isCollected');
    // 如果从未收藏
    if (!detailStorage) {
      wx.setStorageSync('isCollected', {});
    }
    // 如果已收藏
    if (detailStorage[index]) {
      this.setData({
        isCollected:true
      })
    }
  },
  // 处理收藏
  handleCollection() {
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    });
    let title = isCollected ? "收藏成功" : "取消收藏";
    wx.showToast({
      title,
      icon: "success"
    });
    // 本地缓存
    let { index } = this.data;
    wx.getStorage({
      key: 'isCollected',
      success: (res) => {
        // obj用于保存图标的状态
        let obj = res.data;
        obj[index] = isCollected;
        wx.setStorage({
          data: obj,
          key: 'isCollected',
          success: () => {
            console.log("缓存成功");
          }
        });
      }
    });

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})