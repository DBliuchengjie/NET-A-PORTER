Page({
  data:{
    list:[],
    service1:true,
    service2:false
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
          that.setData({
            list: res.data
          });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  onReady:function(){
    var that = this;
    setInterval(function(){
      if(that.data.service1){
        that.setData({
          service1:false,
          service2:true
        })
      }
      else{
        that.setData({
          service1:true,
          service2:false
        })
      }
    },2000);
  }

})
