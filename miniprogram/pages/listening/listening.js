// pages/reading/reading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  toone:function(event){

    console.log(event)
    
    wx.navigateTo({
    
    url: '../video2/u1'
    
    })
    
    },  //实现页面跳转功能
    totwo:function(event){

      console.log(event)
      
      wx.navigateTo({
      
      url: '../video2/u2'
      
      })
      
      },

    tothree:function(event){

      console.log(event)
      
      wx.navigateTo({
      
      url: '../video2/u3'
      
      })
      
      },
      tofour:function(event){

        console.log(event)
        
        wx.navigateTo({
        
        url: '../video2/u4'
        
        })
        
        },
        tofive:function(event){

          console.log(event)
          
          wx.navigateTo({
          
          url: '../video2/u5'
          
          })
          
          },
          tofive:function(event){

            console.log(event)
            
            wx.navigateTo({
            
            url: '../video2/u5'
            
            })
            
            },

})