// miniprogram/pages/setting/setting.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    device: [
      //单词本和清空单词本栏
      { title: 'vocabulary notebook', tap: 'showSystemInfo' },
      { title: 'clean up vocabulary notebook', tap: 'clearCache' },
       {title:'about developers',tap:'Show'}
    ],
    autoplay: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },


    //确认清空单词本弹窗
  showModal: function (title, content, callback) {
    wx.showModal({
      title: title,
      content: content,
      confirmColor: '#1F4BA5',
      cancelColor: '#7F8389',
      success: function (res) {
        if (res.confirm) {
          callback && callback();
        } //确认
      }
    })
  },

//清空单词本
  clearCache: function () {
    this.showModal('Clean up vocabulary notebook', 'Are you sure to empty the word book?', function () {
      wx.clearStorage({
        success: function (msg) {
          wx.showToast({
            title: "cleaned up",
            duration: 1000,
            mask: true,
            icon: "success"
          }) //清空本地数据缓存
        },
        fail: function (e) {
          console.log(e)
        }
      })
    });
  },



  //显示单词本页面
  showSystemInfo: function () {
    wx.navigateTo({
      url: '../device/device'
    });  //实现页面跳转
  },
   
  Show:function(){
    wx.navigateTo({
      url: '../about/about'
    });
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },  //点击图片，改变滑块视图的运动，实现暂停和运动的切换

})