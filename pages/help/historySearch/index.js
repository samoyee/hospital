const app = getApp();

Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    wx.request({
      url: "https://www.dszejt.com/ws/ws_xcx.asmx/Get_XCX_YSZX_YSList_LSZX",
      data: {
        strSFZH: app.globalData.userinfo['身份证号'],
        strKey: "C1BC7666E5C74BD384196-AD1532102C1"
      },
      method: "POST",
      dataType: "JSON",
      success: (res) => {
        this.setData({
          list: JSON.parse(JSON.parse(res.data).d)
        })
      }
    })
  }
})