Page({
    data: {
        weekday: '',
        week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        goods: [
            {
                img: '../../images/goods1.png',
                title: 'FILORGA菲洛嘉360°睛采靓丽眼霜淡化黑眼圈去眼袋'
            },
            {
                img: '../../images/goods2.png',
                title: 'YSL圣罗兰明彩粉底液羽毛墨水气垫哑光妆感服帖遮瑕'
            },
            {
                img: '../../images/goods3.png',
                title: 'Armani官方阿玛尼满天星手表女镶钻星空手表'
            },
        ]
    },
    onLoad: function () {
        let timestamp = Date.parse(new Date());
        let date = new Date(timestamp);

        //获取月份  
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        //获取当日日期 
        let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        let today = new Date().getDay();
        switch (today) {
            case 0:
                this.setData({
                    weekday: this.data.week[0]
                })
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                this.setData({
                    weekday: this.data.week[today]
                })
                break;
        }
        this.setData({
            day: D,
            month: M
        })
    }
})