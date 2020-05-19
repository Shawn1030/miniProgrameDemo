// pages/home/home.js

import {reqMultiData,reqGoodsData} from '../../service/home'
const types=['pop','new','sell']
const TOP_DISTANCE=1000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]},
    },
    currentType:'pop',
    isShow:false,
    isTabFixed:false,
    tabScrollTop:0
    
  },
  handleTabControl(e){
    const index = e.detail.index
    
    this.setData({
      currentType:types[index]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this._reqMultiData()
   this._reqGoodsData('pop')
   this._reqGoodsData('new')
   this._reqGoodsData('sell')
  },
  _reqMultiData(){
    reqMultiData().then(res=>{
      const banners=res.data.data.banner.list
      const recommends=res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },
  _reqGoodsData(type){
    const page = this.data.goods[type].page+1
    reqGoodsData(type,page).then(res=>{
      const list = res.data.data.list
      const oldList=this.data.goods[type].list
      oldList.push(...list)
      const keyList=`goods.${type}.list`
      const keyPage=`goods.${type}.page`
      this.setData({
        [keyList]:oldList,
        [keyPage]:page
      })
    })
  },
  handleImageLoad(){
      wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect=>{
     
      this.data.tabScrollTop=rect.top
      console.log(rect);
    }).exec()
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
    wx.showLoading({
      title:'加载中' ,
      mask: true,
      success: ()=>{
         this._reqGoodsData(this.data.currentType)
          wx.hideLoading();

      }
    
    });
    
  },
  onPageScroll(options){
    const scrollTop = options.scrollTop
    const flag = scrollTop>TOP_DISTANCE
    if(flag!==this.data.isShow){
      this.setData({
        isShow:flag
      })
    }
    // 修改isTabFixed属性
    const flag2=scrollTop>=this.data.tabScrollTop
    if(flag2!==this.data.isTabFixed){
      this.setData({
        isTabFixed:flag2
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})