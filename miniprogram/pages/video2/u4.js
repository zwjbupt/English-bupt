Page({
  data: {
    bo:true,
    sliderV:0,
    sliderMax: 414,
    current: {
      poster: 'https://7465-test-1gskp8mz8d86bcc1-1303735675.tcb.qcloud.la/bupt.jpg?sign=bae3c975b2732f1d0121b99a73a005e1&t=1608041784',
      name: 'Music',
      author: '新理念英语',
      src: 'https://7465-test-1gskp8mz8d86bcc1-1303735675.tcb.qcloud.la/Track%202-04-01.mp3?sign=6e539108f081d108d01cf0553dafa971&t=1608036852',
    },
    audioAction: {
      method: 'pause'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },

 
  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  },

  /**
   * 将秒转换为 分:秒
   * s int 秒数
  */
  formatMinute(s) {
    //计算分钟
    //算法：将秒数除以60，然后下舍入，既得到分钟数
    var h;
    h = Math.floor(s / 60);
    //计算秒
    //算法：取得秒%60的余数，既得到秒数
    s = s % 60;
    //将变量转换为字符串
    h += '';
    s += '';
    //如果只有一位数，前面增加一个0
    h = (h.length == 1) ? '0' + h : h;
    s = (s.length == 1) ? '0' + s : s;
    return h + ':' + s ;
  }





})