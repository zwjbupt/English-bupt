Page({
  data: {
    bo:true,
    sliderV:0,
    sliderMax: 414,
    current: {
      poster: 'https://7465-test-1gskp8mz8d86bcc1-1303735675.tcb.qcloud.la/bupt.jpg?sign=bae3c975b2732f1d0121b99a73a005e1&t=1608041784',
      name: 'Food And Drinks',
      author: '新理念英语',
      src: 'https://7465-test-1gskp8mz8d86bcc1-1303735675.tcb.qcloud.la/Track%202-01-01.mp3?sign=226b3fcaf64eecf9f07b430e61462ba7&t=1608045087',
    },
    audioAction: {
      method: 'pause'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  }, //实现音频的播放
  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }  //实现音频的暂停
    });
  },
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  },

})