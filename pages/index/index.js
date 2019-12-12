const app = getApp()

Page({
    data: {
        autoplay: true, // 是否自动切换
        interval: 3000, // 自动切换时间间隔
        duration: 800, // 滑动动画时长
        indicatorDots: true, // 是否显示面板指示点
        bannerImgaes: [
            {image: '../../images/banner1.png'},
            {image: '../../images/banner2.png'},
            {image: '../../images/banner3.png'}
        ],
        ballBottom: 150,
        ballRight: 23,
        screenHeight: 0,
        screenWidth: 0,
    },
    bindTextAreaBlur: function(e) {
        this.setData({
            textareaValue: e.detail.value
        })
        console.log(this.data.textareaValue)
    },
    onLoad: function () {
        //获取屏幕宽高
        var _this = this;
        wx.getSystemInfo({
            success: function (res) {
                _this.setData({
                    screenHeight: res.windowHeight,
                    screenWidth: res.windowWidth,
                });
            }
        });
    },
    ballMoveEvent: function (e) {
        console.log('我被拖动了....')
        var touchs = e.touches[0];
        var pageX = touchs.pageX;
        var pageY = touchs.pageY;
        // console.log('pageX: ' + pageX)
        // console.log('pageY: ' + pageY)
//防止坐标越界,view宽高的一般
        if (pageX < 30) return;
        if (pageX > this.data.screenWidth - 30) return;
        if (this.data.screenHeight - pageY <= 30) return;
        if (pageY <= 30) return;
//这里用right和bottom.所以需要将pageX pageY转换
        var x = this.data.screenWidth - pageX - 30;
        var y = this.data.screenHeight - pageY - 30;
        // console.log('x: ' + x)
        // console.log('y: ' + y)
        this.setData({
            ballBottom: y,
            ballRight: x
        });
    },
    //点击事件
    ballClickEvent: function () {
        console.log('点击了....')
    }

})