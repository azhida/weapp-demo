var app = getApp()
Page({
  data: {
    navbar: ['推荐', '语文', '数学','英语','编程', '大学科'],
    currentTab: 0,

    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    oneButton: [{text: '确定'}],

  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }


})

