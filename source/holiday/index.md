---
title: 给最爱的你
date: 2016-08-17 13:42:34
---
<script type="text/javascript">
    function isHoliday()
    {
        var today = new Date();
        var holiday = {'1/1':'元旦','3/8':'妇女节','5/1':'劳动节','6/1':'儿童节','8/9':'七夕','9/15':'中秋','10/1':'国庆节','12/25':'圣诞节'};
        var key = (today.getMonth() + 1) + '/' + today.getDate();
        if (holiday[key])
        {
            var rtl = confirm("今天是"+holiday[key]+",是否跳转到节日页面^_^");
            if (rtl) 
            {
                switch(holiday[key])
                {
                    case '儿童节':
                        window.location.assign("http://www.xn--4gqa63c686ta68iba.ren/day/ertongjie/2016/index.html");
                      break;
                    case '七夕':
                        window.location.assign("http://www.xn--4gqa63c686ta68iba.ren/day/qixi/2016/index.html");
                      break;
                      case '中秋':
                        window.location.assign("http://www.xn--4gqa63c686ta68iba.ren/day/zhongqiu/2016/index.html");
                      break;
                    default:
                        //confirm("今天是"+holiday[key]+",是否跳转到节日页面^_^");
                     break;
                }
            }
        }
    }
    function timeMsg()
    {
        setTimeout("isHoliday()", 2000);        
    }
    timeMsg();
</script>

## 2016
### 儿童节
<a href="http://www.xn--4gqa63c686ta68iba.ren/day/ertongjie/2016/index.html"><img class="nofancybox" src="http://obd6jz6in.bkt.clouddn.com/%E5%84%BF%E7%AB%A5%E8%8A%82.jpg"></a>
### 七夕
<a href="http://www.xn--4gqa63c686ta68iba.ren/day/qixi/2016/index.html"><img class="nofancybox" src="http://obd6jz6in.bkt.clouddn.com/%E4%B8%83%E5%A4%95.jpg"></a>
### 中秋
<a href="http://www.xn--4gqa63c686ta68iba.ren/day/zhongqiu/2016/index.html"><img class="nofancybox" src="http://obd6jz6in.bkt.clouddn.com/zhongqiu2.png"></a>

