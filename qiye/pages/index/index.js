//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    index_index_scroll_tmpl: {
      images: [
        '/images/1.jpg',
        '/images/2.jpg'
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },
    index_index_navs_tmpl: {
      navs: [
        {
          image: "/images/i1.jpg",
          text: "上门开锁"
        },
        {
          image: "/images/i2.jpg",
          text: "配置钥匙"
        },
        {
          image: "/images/i3.jpg",
          text: "安装门禁"
        },
        {
          image: "/images/i4.jpg",
          text: "销售锁具"
        }
      ]
    },
    zixun:[]

  },
  fetchZixun(){
    var that = this;
    wx.request({
      url: 'http://m.hzyaoyi.cn/wx/zixun_list.asp',
      success: function(res){
        that.setData({
          zixun: res.data
        })
      }
    })
  },
  onLoad: function(options){
    this.fetchZixun();
  }

})
