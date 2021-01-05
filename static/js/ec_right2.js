var ec_right2 = echarts.init(document.getElementById('r2'), "dark");


var mydata = [{'name': '上海', 'value': 318}, {'name': '云南', 'value': 162}]

var ec_right2_option = {
    title: {
        text: '今日新增病例地图',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 0,end: 0 },
            {start: 1, end: 5 },
			{ start: 5, end: 9 },
            {  start: 10, end: 50 },
            { start: 50 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#FFFFFF']
    },
    //配置属性
    series: [{
        name: '新增确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data:[] //mydata //数据
    }]
};
ec_right2.setOption(ec_right2_option)