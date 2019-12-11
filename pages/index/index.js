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
        ]
    },
    bindTextAreaBlur: function(e) {
        this.setData({
            textareaValue: e.detail.value
        })
        console.log(this.data.textareaValue)
    },
    onLoad: function () {

    }
})