// pages/zixun/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes:[],
    hidden: false
  
  },

  fnOpenZxxx(e){

    console.log(e);

    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/zixun/zixun_xinxi?id=' + id,
    })


  },

  fechData(){

    var that = this;
    that.setData({
      hidden: false
    })

    wx.request({
      url: 'http://m.hzyaoyi.cn/wx/zixun_list.asp',
      success: function(res){
        that.setData({
          nodes: res.data
        })

        setTimeout(function(){
          that.setData({
            hidden: true
          }, 300)
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fechData()
  
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