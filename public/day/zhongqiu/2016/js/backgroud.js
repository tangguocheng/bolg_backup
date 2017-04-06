/* 测试是否是PC */
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

var time = 20;

function showCountTime() {
	if (time > 0) {
		time--;
		document.getElementById("countDown").innerHTML = "<center>" + time + " 秒后自动关闭</center>";
		var t = setTimeout("showCountTime()", 1000);
	} else {
		$("#cellPhone").css("display", "none");
	}
}

$(document).ready(function() {
	var devicePC = IsPC();
	if (devicePC) {
		$("#cellPhone").css("display", "none");
	} else {
		$("#cellPhone").css("display", "block");
		$("#myMap").css("display", "none");
		var t = setTimeout("showCountTime()", 1000);
	}

	document.getElementById("audioBackground").volume = 0.3;

	$("body").vegas({
		delay: 3000,
		timer: false,
		overlay: false,
		shuffle: false,
		transition: 'random',
		cover: true,
		preload: true,
		slides: [{
			src: "http://obd6jz6in.bkt.clouddn.com/jindaxue.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/huoqiu01.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/huoqiu02.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/huoqiu03.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/huoqiu04.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/nanjing01.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/nanjing03.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/nanjing05.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/nanjing10.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/nanjing11.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/nanjing07.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou25.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou01.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou21.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou19.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou09.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou06.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/hangzhou12.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan01.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan02.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan03.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan04.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan05.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan07.jpg"
		}, {
			src: "http://obd6jz6in.bkt.clouddn.com/maanshan08.jpg"
		}]
	});
});