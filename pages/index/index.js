//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log( 'index--------------------onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
      that.update()
    })
  },
  onShow: function() {
    console && console.info( "index--------------------onShow" );
  },
  onReady: function() {
    console && console.info( "index--------------------onReady" );
  },
  onHide: function() {
    console && console.info( "index--------------------onHide" );
  },
  onUnload: function() {
    console && console.info( "index--------------------onUnload" );
  }
})
