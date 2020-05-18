// component/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子'],
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      const index= e.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('itemTittle',{title:this.data.titles[index]})
      
    }
  },

})
