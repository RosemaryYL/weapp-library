App({
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            });
        }
    },
    provinces: [
        "陕西",
        "北京",
        "上海",
        "天津",
        "安徽",
        "山东",
        "江苏",
        "湖北",
        "福建",
        "辽宁",
        "广东",
        "山西"
    ],
    schools: {
        陕西: [
            "西北工业大学",
            "西北农林科技大学",
        ],
        北京: [
            "北京航空航天大学",
            "中央民族大学",
            "北京理工大学",
            "中国农业大学",
            "北京科技大学"
        ],
        上海:[
            "同济大学",
            "上海外国语大学",
            "上海财经大学"
        ],
        天津:[
            "南开大学",
        ],
        安徽:[
            "中国科学技术大学"
        ],
        山东:[
            "山东大学",
            "中国海洋大学",
        ],
        江苏:[
            "东南大学",
            "南京大学",
            "苏州大学",
            "中国矿业大学",
            "南京航空航天大学",
            "河海大学"
        ],
        湖北:[
            "华中师范大学"
        ],
        福建:[
            "厦门大学",
        ],
        辽宁:[
            "大连理工大学"
        ],
        广东:[
            "华南师范大学"
        ],
        山西:[
            "太原理工大学"
        ]
    },
    codes: {
        西北工业大学: "nwpu",
        西北农林科技大学: "nwsuaf",
        北京航空航天大学: "buaa",
        中央民族大学: "muc",
        北京理工大学: "bit",
        中国农业大学: "cau",
        同济大学:"tongji",
        南开大学: "nankai",
        中国科学技术大学: "ustc",
        山东大学: "sdu",
        中国海洋大学: "ouc",
        东南大学: "seu",
        南京大学:"nju",
        厦门大学:"xmu",
        大连理工大学:"dlut",
        苏州大学:"suda",
        华南师范大学:"scnu",
        北京科技大学:"ustb",
        中国矿业大学:"cumt",
        南京航空航天大学:"nuaa",
        河海大学:"hhu",
        上海外国语大学:"sisu",
        上海财经大学:"shufe",
        华中师范大学:"ccnu",
        太原理工大学:"tyut"
    }

})
