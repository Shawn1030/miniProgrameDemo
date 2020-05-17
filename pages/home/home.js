// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstName:'Shawn',

    lastName:'Tom',
    isShow:false,
    score:90,
    arr:['a','b','c'],
    persons:[
      {id:1,name:'shawn'},
      {id:2,name:'jack'}
    ],
    time:new Date()
  },
  innerClick(){
    console.log('innerClick');
    
  },
  middleClick(e){
    console.log('middleClick');
    console.log(e);
    
  },
  outerClick(e){
    console.log('outerClick');
   
    
  },
  outerCapture(e){
    console.log('outerCapture');
    
    console.log(e);
  },
  middleCapture(e){
    console.log('middleCapture');
    console.log(e);
  },
  innerCapture(){
    console.log('innerCapture');
    
  },
  handleTap1(){
    console.log('handleTap1');
    
  },
  handleTap2(){
    console.log('handleTap2');
    
  },
  handleTap3(){
    console.log('handleTap3');
    
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

  }
})