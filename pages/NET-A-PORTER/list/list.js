Page({
  data:{
    list2:[],
    service1:true,
    service2:false
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list2.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
          that.setData({
            list2: res.data
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
  },
  setStorage:function(event){
    wx.clearStorageSync();
    wx.setStorageSync("src",event.currentTarget.dataset.src);
    wx.setStorageSync("name",event.currentTarget.dataset.name);
    wx.setStorageSync("item",event.currentTarget.dataset.item);
    wx.setStorageSync("detail",event.currentTarget.dataset.detail);
    wx.setStorageSync("price",event.currentTarget.dataset.price);
    wx.setStorageSync("img2",event.currentTarget.dataset.second);
    wx.setStorageSync("img3",event.currentTarget.dataset.third);
    wx.setStorageSync("img4",event.currentTarget.dataset.fourth);
    wx.setStorageSync("img5",event.currentTarget.dataset.fifth);
    wx.setStorageSync("img6",event.currentTarget.dataset.sixth);
  }

})
