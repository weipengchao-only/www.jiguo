// banner区域   1、点击立即注册，申请人数+1
var gosq = document.getElementsByClassName('gosq')[0];
var sqrs = document.getElementsByClassName('sqrs')[0];
var x = sqrs.firstChild.nodeValue.split('人申请')[0] - 0;
var i = 0;
gosq.onclick = function () {
    i++;
    if (i < 2) {
        sqrs.innerHTML = (x + 1) + '人申请';
    } else {
        alert('已申请')
    }
}
//2、申请时间剩余
function sqdjs() {
    var sqtime = document.getElementsByClassName('sqtime')[0];
    var date = new Date();
    var time = new Date('2021-06-01  00:00:00');
    var c = time - date;
    var day = Math.floor(c / 1000 / 60 / 60 / 24);
    var hour = Math.floor(c / 1000 / 60 / 60 % 24);
    var min = Math.floor(c / 1000 / 60 % 60);
    var s = Math.floor(c / 1000 % 60);
    sqtime.innerHTML = '申请时间剩余：' + day + '天' + hour + '小时' + min + '分钟' + s + '秒';
}
sqdjs();
setInterval(sqdjs, 1000);

// 轮播图
var leftbtn = document.getElementsByClassName('lbtn')[0];
var rightbtn = document.getElementsByClassName('rbtn')[0];
var lunbo = document.getElementsByClassName('lunbo')[0];
var imgs = document.getElementsByClassName('sy1');
var inner = document.getElementsByClassName('baoguolb')[0];
var x = 0;
var t1, t2;
function move() {
    t1 = setInterval(function () {
        // x++
        // inner.scrollLeft += 1200;
        // if (inner.scrollLeft > 2400) {
            // inner.scrollLeft = 0;
            // x=0
        // }

        x++;
        if (x >= imgs.length) {
            x = 0
        }
        var step = 0;
        var start = inner.scrollLeft;
        var end = imgs[0].offsetWidth * x;
        var c = (end - start) / 4;
        t2 = setInterval(function () {
            step++;
            if (step >= 4) {
                step = 0;
                clearInterval(t2);
            }
            start += c;
            inner.scrollLeft = start;
        }, 15)
        imgs[x].onclick = function () {
            clearInterval(t1)
        }
        imgs[x].ondbclick = function () {
            move();
        }
    }, 1000)
}
move();
rightbtn.onclick = function () {
    inner.scrollLeft += 1200
    clearInterval(t1);
    if (inner.scrollLeft > 2400) {
        inner.scrollLeft = 0;
    }else{
        inner.scrollLeft += 1200
    }
    // timer = setInterval(function(){
    // 每次向左滑动的距离

    // var x1 = lunbo.offsetLeft;
    // if(x1>2400){
    // return lunbo.offsetLeft=0;
    // }
    // },1000)

}


// console.log(time);
// console.log(c);

// {"img":"http://192.168.31.219:3000/img/hot3.jpg",
// "text":"Liquid Image 338 运动摄像眼镜",
// "description":"全新智能眼镜",
// "price":"￥489",
// "like":3,
// "words":5}

// http://192.168.31.219:3000/useing/public
// 试用1
// "img":"http://192.168.31.219:3000/img/hot3.jpg",
// "text":"Liquid Image 338 运动摄像眼镜",
// "uName":"苏亚",
// "endTime":"2020-7-28",
// "info_ty":"首发","
// totalnum":2032,
// "num":20,
// "apply":1392

// http://192.168.31.219:3000/report/hot
// img":"http://192.168.31.219:3000/img/k2.jpg",
// "text":"声音不是最优秀，但它形音完美的结合，足够打动人心",
// "uName":"土豆",
// "endTime":"2020-8-28",
// "info_ty":"首发",
// "totalnum":2032,
// "num":20,
// "apply":1392

// http://192.168.31.219:3000/guid/new
// "img":"http://192.168.31.219:3000/img/hot3.jpg",
// "text":"Liquid Image 338 运动摄像眼镜",
// "like":3,
// "words":5}

// http://192.168.31.219:3000/guid/hot
// "img":"http://192.168.31.219:3000/img/hot3.jpg"
// "text":"他用十二年找一把完美剃须刀",
// "like":3,
// "words":5}

// http://192.168.31.219:3000/play/new
// "img":"http://192.168.31.219:3000/img/hot3.jpg",
// "text":"Liquid Image 338 运动摄像眼镜",
// "description":"全新智能眼镜",
// "price":"￥489",
// "like":3,
// "words":5}