// component/my-slot/my-slot.js
Component({

  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

    lifetimes:{
    created(){
      console.log('created');
      
    },
    attached(){
      console.log('attached');
      
    },
    ready(){
      console.log('ready');
      
    },
    detached(){
      console.log('detached');
      
    }
  }
})
