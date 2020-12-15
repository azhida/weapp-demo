var app = getApp()
Page({
  data: {
    navbar: ['推荐', '语文', '数学', '英语', '编程', '大学科'],
    currentTab: 0,

    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
    oneButton: [{ text: '确定' }],
    pageBody: { // 页面参数
      top: 100,
      height: 100
    },
    contentView: { // 内容区域参数
      height: 0
    },
    gradeView: {
      hidden: false
    },
    gradeData: [
      {
        A: '幼儿园',
        B: ['小班', '中班', '大班']
      },
      {
        A: '小学',
        B: [
          '一年级',
          '二年级',
          '三年级',
          '四年级',
          '五年级',
          '六年级',
          ]
      }
      , {
        A: '初中',
        B: [
          '预初',
          '初一',
          '初二',
          '初三',
        ]
      }
      , {
        A: '高中',
        B: ['高一', '高二', '高三']
      }

    ],
    gradeClassCurrentTab: '小班'

  },
  fnOpenGradeView: function (e) {
    // 打开年级列表
    this.setData({
      gradeView: {
        hidden: false
      }
    })
    wx.hideTabBar();

  },
  fnCloseGradeView: function (e) {
    // 关闭年级列表
    this.setData({
      gradeView: {
        hidden: true
      }
    })
    wx.showTabBar();

  },
  fnSelectGrade: function(e){
    // 选择 年级班级
console.log(e);

this.setData({
  gradeClassCurrentTab: e.currentTarget.dataset.grade_class_name,
 
})

  },

  navbarTap: function (e) {

    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      aaaHidden: false
    })

  },
  onLoad: function (params) {

    this.fnSetHeaderTitle({ that: this, title: '学而思网校' });

  },
  fnSetHeaderTitle(params, callback) {

    // 设置 页面高度，页面标题及其高度

    var systemInfoSync = wx.getSystemInfoSync(); // 获取系统参数

    console.log(systemInfoSync);

    var menuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect(); // 获取 右上角胶囊参数

    console.log(menuButtonBoundingClientRect);

    // 页面
    var pageBody = {
      top: systemInfoSync.safeArea.top,
      height: systemInfoSync.windowHeight - systemInfoSync.safeArea.top // page 的高度，不含 底部导航条 tabBar 的高度
    };

    // 页面标题区域
    var headerTitle = {
      title: params.title, // 页面标题
      height: menuButtonBoundingClientRect.height + (menuButtonBoundingClientRect.top - systemInfoSync.safeArea.top) * 2  // 标题栏的高度
    };

    // 页面内容区域
    var contentView = {
      height: pageBody.height - headerTitle.height
    };

    params.that.setData({
      pageBody: pageBody,
      headerTitle: headerTitle,
      contentView: contentView,
    })

  }

})

