
Page({
   data: {

  },
 open:function(){
    wx.switchTab({
      url: '/pages/listening/listening',
      success: function () {
         console.log("jump success")
     },
     fail: function () {
         console.log("jump failed")
     },
     complete: function () {
         console.log("jump complete")
     }
    })
   }
// wx.switchTab实现了页面跳转功能
})





