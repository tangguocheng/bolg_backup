/* 灯箱设置 */
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': false,
    'albumLabel': "第 %1 张, 总共 %2 张"
});
/* 初始化地图对象，加载地图 */
var jinLoc = [115.7855994452, 32.8905334870];
var tgcLoc = [118.5571538315, 31.6695884384];
var zhongqiu = [121.406114, 30.804687];
var footPrint = [119.421069, 32.408809, 115.654545, 32.924734, 120.138508, 30.242294, 118.794767, 32.07643,
    118.788922, 32.020001, 121.405861, 30.796891, 118.37811, 31.377549, 118.456816, 31.652502, 118.50578, 31.69366,
    120.335891, 36.05664, 120.319583, 36.061636, 120.483807, 30.74978, 116.275659, 32.353908
]
var makerTgc; /* tgc的位置 */
var makerJin; /* jin的位置 */

/* 创建地图 */
var map = new AMap.Map("myMap", {
    resizeEnable: true,
    center: [103.501049, 35.339706],
    zoom: 4
});
/* 添加点标记，并使用自己的icon */
makerJin = new AMap.Marker({
    position: jinLoc,
    animation: "AMAP_ANIMATION_BOUNCE",
    icon: new AMap.Icon({
        size: new AMap.Size(64, 64),
        image: "./img/jin.ico",
    })
});
makerTgc = new AMap.Marker({
    position: tgcLoc,
    animation: "AMAP_ANIMATION_BOUNCE",
    icon: new AMap.Icon({
        size: new AMap.Size(64, 72),
        image: "./img/tgc.ico",
    })
});
var footMarkArr = []; /* 足迹点 */
/* 在地图上添加足迹 */
function footMark() {
    for (var i = 0; i < footPrint.length; i += 2) {
        var loc = [footPrint[i], footPrint[i + 1]],
            mark = new AMap.Marker({
                map: map,
                animation: "AMAP_ANIMATION_DROP",
                position: loc,
            });
        footMarkArr.push(mark);
    }
}

/* mark点移动动画 */
function moveToyou() {
    var des = [jinLoc[0] - 0.0001, jinLoc[1]]
    var lnglat = new AMap.LngLat(jinLoc[0], jinLoc[1]);
    var usDistance = lnglat.distance([tgcLoc[0], tgcLoc[1]]);
    var speed = Math.ceil(usDistance / 13) * 5;
    makerTgc.moveTo(des, speed);
}

function creatImgDate() {
    var target = 'http://obd6jz6in.bkt.clouddn.com/';
    var imgFormate = '.jpg';
    var loction = ['fuyang', 'hangzhou', 'huoqiu', 'maanshan', 'nanjing', 'qingdao', 'shanghai'];
    var imgNum = [12, 33, 4, 8, 16, 8, 6];
    var hrefStr;
    var a_link;
    for (var j = 0; j < 7; j++) {
        for (var i = 1; i <= imgNum[j]; i++) {
            a_link = $('<a></a>');
            if (i < 10) {
                hrefStr = target + loction[j] + '0' + i + imgFormate;
            } else {
                hrefStr = target + loction[j] + i + imgFormate;
            }
            a_link.attr('href', hrefStr);
            a_link.attr('data-lightbox', loction[j]);
            a_link.appendTo("#imgDateBase");
        }
    }
}

/* 初始化页面，增加所有去过的地方的mark点*/
function initPage() {
    creatImgDate();
    footMark();
    map.setFitView();
    var n = setTimeout(function() {
        msgInit = "地图上标记的这些，都是我们去过的地方:马鞍山、阜阳、扬州、南京、青岛等等。"
        showToast(msgInit);
    }, 2000);
    var t = setTimeout(function() {
        var msgInit = "和你一起的旅行总是值得被纪念，不过，我们的故事得从头说起才行……";
        showToast(msgInit);
    }, 6000);
    var m = setTimeout(function() {
        swal({
            title: "null",
            text: "准备好跟我来一场说走就走的旅行了吗？",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "当然",
            closeOnConfirm: false
        }, function() {
            swal.close();
            /* 全屏 */
            launchFullScreen(document.getElementById("viewContainer"));
            var t = setTimeout("onclickHandle()", 3000);
        });
    }, 10000);
}

/* 全屏 */
function launchFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

/* 退出全屏 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/*测试用*/
var markShangHai;
var polylineSH;

function onclickHandle() {
    setOnclick(false); /* 移除onclick属性 */
    switch (stateStep) {
        case 0:
            {
                map.remove(footMarkArr); /* 移除足迹 */
                makerTgc.setMap(map); /* 添加us */
                makerJin.setMap(map);
                map.setFitView(); /* 将地图调整到合适的试图 */
                toastr.remove(); /* 移除弹窗 */
                stateStep = 1; /* 到第二页 */
                var t = setTimeout(function() {
                    map.zoomOut();
                    var msgInfo = "大学四年，我们异地恋了四年，你在阜阳，我在马鞍山";
                    showToast(msgInfo, "6000");
                }, 3000);
                var n = setTimeout(function() {
                    var msg = "我们之间相距 "
                    var lnglat = new AMap.LngLat(115.7855994452, 32.8905334870); /* 阜阳师范学院 */
                    var usDistance = lnglat.distance([118.5571538315, 31.6695884384]); /* 安徽工业大学 */
                    if (usDistance < 1000) {
                        msg += usDistance + "  米。";
                    } else {
                        usDistance = usDistance / 1000;
                        msg += usDistance + "  公里。";
                    }
                    msg += "路途是那么的远，想要去到你身边，需要坐<strong>6</strong>个小时火车！";
                    showToast(msg, 10000);
                    var t = setTimeout(function function_name() {
                        moveToyou(); /* 移动到一起 */
                        stateStep = 2;
                    }, 2000);
                }, 5000);
            }
            break;
        case 2:
            {
                toastr.remove(); /* 移除弹窗 */
                var m = setTimeout(function() {
                    var msgInfo = "2015年的那个夏天，我们毕业了，我们的异地恋也“毕业了”^_^";
                    showToast(msgInfo, "6000");
                    swal({
                        title: "null",
                        imageUrl: "http://obd6jz6in.bkt.clouddn.com/jindaxue.jpg",
                        imageSize: "430x430",
                        timer: "5000",
                        showConfirmButton: false
                    });
                }, 3000);
                var n = setTimeout(function() {
                    makerJin.setPosition([120.144087, 30.243872]);
                    makerTgc.setPosition([120.144087, 30.243872]);
                    map.setZoomAndCenter(13, [120.144087, 30.243872]); /* 杭州 */
                    var msgInfo = "然后，我们来到了美丽的杭州。<br/>可以一起吃饭、一起逛街、一起参与对方生活的点滴，一切是那么的美好，有你真好。";
                    showToast(msgInfo);
                }, 9000);
                var p = setTimeout(function() {
                    makerTgc.setPosition([120.144087, 30.243872]);
                    makerTgc.setPosition([120.144087, 30.243872]);
                    map.setZoomAndCenter(13, [120.144087, 30.243872]); /* 杭州 */
                    var msgInfo = "你猜，我最激动的是哪天？没错，是我第一次带你回去的那天：2016-04-08！";
                    showToast(msgInfo);
                    var q = setTimeout(function() {
                        toastr.remove(); /* 移除弹窗 */
                        markShangHai = new AMap.Marker({
                            map: map,
                            animation: "AMAP_ANIMATION_BOUNCE",
                            position: [121.402257, 30.795293],
                            /*上海 */
                        });
                        map.setFitView();
                        var lineArr = [
                            [120.144087, 30.243872],
                            [121.402257, 30.795293]
                        ];
                        polylineSH = new AMap.Polyline({
                            path: lineArr, //设置线覆盖物路径
                            strokeColor: "#3366FF", //线颜色
                            strokeOpacity: 0.8, //线透明度
                            strokeWeight: 4, //线宽
                            strokeStyle: "dashed", //线样式
                            strokeDasharray: [10, 5] //补充线样式
                        });
                        polylineSH.setMap(map);
                    }, 4000);
                    var r = setTimeout(function() {
                        var des = [121.402257, 30.795293]
                        var lnglat = new AMap.LngLat(121.402257, 30.795293);
                        var usDistance = lnglat.distance([120.144087, 30.243872]); /* 上海和杭州之间的距离 */
                        var speed = Math.ceil(usDistance / 13) * 5;
                        stateStep = 3;
                        makerTgc.setAnimation("AMAP_ANIMATION_NONE");
                        makerTgc.moveTo(des, speed);
                        var msgInfo = "2016年04月08日，我终于把你拐回家了。我们一起去上海看了我爸妈，他们对你比我还满意！";
                        showToast(msgInfo);
                    }, 9000);
                }, 15000);
            }
            break;
        case 3:
            {
                var t = setTimeout(function() {
                    map.clearMap(); /* 删除地图上的所有覆盖物 */
                    footMark(); /* 重新标记足迹 */
                    map.setFitView();
                    makerTgc.hide();
                    toastr.remove();
                    map.zoomIn();
                    var msg = "我很想把我们这些年一起走过的路，一起去过的地方都用这种方式怀念一下，但是，这一定会让这个网页变得很长很长，因为每一个和你在一起的日子都值得去怀念。";
                    showToast(msg, 8000);
                }, 1500);
                var m = setTimeout(function() {
                    map.zoomOut();
                    var msg = "所以，我把我们去过的地方都标记了出来，同时整理了一部分照片。<br/>未来的路还很长，我会一直陪着你。";
                    showToast(msg, 8000);
                }, 5500);
                var n = setTimeout(function() {
                    $("#imgGallery").css("display", "block");
                }, 9000);
            }
            break;
    }
}

function setOnclick(argument) {
    if (argument == true) {
        $("#myMap").attr("onclick", "onclickHandle()");
    } else {
        $("#myMap").removeAttr("onclick");
    }
}
/* 移动结束 */
AMap.event.addListener(makerTgc, 'moveend',
    function() {
        makerJin.hide();
        makerTgc.setIcon("./img/us.ico");
        map.setFitView();
        switch (stateStep) {
            case 2:
                {
                    var msg = "漫长的旅程，跋山涉水,终于来到你身边。";
                    msg += "<br/>四年的异地恋，很辛苦，也很幸运，能有你的不离不弃。";
                    showToast(msg);
                    //setOnclick(true);
                    var t = setTimeout("onclickHandle()", 6000);
                }
                break;
            case 3:
                {
                    map.remove(markShangHai);
                    map.remove(polylineSH);
                    makerTgc.setAnimation("AMAP_ANIMATION_BOUNCE");
                    map.setCenter([121.402257, 30.795293]);
                    var t = setTimeout(function() {
                        toastr.remove(); /* 移除弹窗 */
                        map.zoomOut();
                        var msg = "毫无疑问，这个中秋也会是一个值得纪念的日子^_^";
                        showToast(msg);
                    }, 1500);
                    var t = setTimeout("onclickHandle()", 5000);
                }
                break;
        }
    },
    false);

map.on("complete", function() {
    var t = setTimeout(function function_name(argument) {
        initPage();
    }, 2000);
});

/* 弹窗 */
function showToast(msg, timeOut = "0") {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-bottom-full-width",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": timeOut,
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "fadeOut",
        "progressBar": false
    };
    toastr.info(msg);
}
var stateStep = 0;