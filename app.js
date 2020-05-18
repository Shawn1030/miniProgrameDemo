App({
  globalData:{

  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageSync('token')
    if(token && token.lengt!==0){
      this.authLogin(token)
    }else {
      this.login()
    }

      
  },
  login(){
    wx.login({
      success: (res) => {
        //1.获取code
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method:'post',
          data:{
            code
          },
          success:res=>{
            const token = res.data.token
            wx.setStorageSync('token', token)
           
          },
          fail:err=>{console.log(err);
          }
        })
      },
    })
  },
  authLogin(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      fail: (err) => {
        console.log(err);
        
      },
      success: (result) => {
        console.log('you',result);
        
      },
    })
  }
})
