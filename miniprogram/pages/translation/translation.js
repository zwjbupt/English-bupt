const util=require("../../utils/util")
import SHA256 from '../../utils/SHA256'
//引入utils中准备好的SHA256模块，用于调用API中的SHA256加密

Page({
  /**
   * 页面的初始数据
   */
  data:{
    voteTitle: null,
    simple: false,  
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

  voteTitle: function (e) {
  let word=this.data.word
   this.setData({
     simple:true,
     word:e.detail.value,
   })
  },
//获取到输入框中输入的单词，并将其在页面显示
search: function (e) {
  var that = this
  let word=this.data.word
  let basic=this.data.basic

function truncate(q){
    var len = q.length;
    if(len<=20)
     return q;
    else
     return q.substring(0, 10) + len + q.substring(len-10, len);
}//用于签名中对字符串的处理，相信你们都看到懂~
var appKey = '161afed50039e6fa';
var key = 'iPIC9z8oZcLn4uhBBNihBJmGk6t4YAGJ';
var query = word;
var salt = (new Date).getTime();//加盐加密
var curtime = Math.round(new Date().getTime()/1000);//获取时间戳
var from = 'auto';
var to = 'zh-CHS';
var str1 = appKey + truncate(query) + salt + curtime + key;//得到符合要求的字符串
var sign = SHA256.sha256_digest(str1)//历经艰难困苦，终于获得签名，运用到SHA256加密

console.log(query)

wx.request({
    url: 'http://openapi.youdao.com/api',
    type: 'get',
    dataType: 'json',
    data: {
        q: query,
        appKey: appKey,
        salt: salt,
        from: from,
        to: to,
        sign: sign,
        signType: "v3",
        curtime: curtime,
      voice:0
  },

    success (res) {
    console.log(res.data.basic)
       that.setData({
        explains:res.data.basic.explains,//显示词义
        exam_type:res.data.basic.exam_type,
        phonetic:'/ '+res.data.basic.phonetic+' /',//显示音标
      })
    },
    fail: function () {
    },
    complete: function () {
    },
})
},//调取有道词典的API（这个API太难调取了）


//实现收藏功能
handleSaveTap() {
  if (wx.getStorageSync('collect')) {
    var collect = wx.getStorageSync('collect')
  }//同步获取本地缓存
  else {
    var collect = []
  }
  collect.push([this.data.word, this.data.phonetic,this.data.explains])
  wx.setStorage({
    key: "collect",
    data: collect
  })//储存缓存数据，储存搜索到的信息
    collect.collectionStatus = true;
    this.setData({
      'voteTitle.collectionStatus': collect.collectionStatus
    })
  console.log(collect)
  wx.showToast({
    title: "Saved" ,
    duration: 1000,
    icon: "success",
    mask: true
  })//收藏成功并显示消息提示框

}

})






