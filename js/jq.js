$(window).scroll(function(){
    var scrT=document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(scrT);
    var backT=$("#forwram").offset().top - $(window).height()+600;
    //console.log(backT);
    //var nav=$("#nav").offset().top;
    if(scrT > backT){
        $(".tupian").addClass("animate__animated animate__bounceInUp show").removeClass("fade");
    }
    var newsT=$("#news").offset().top - $(window).height()+350;
    if(scrT > newsT){
        $(".news_top").addClass("animate__animated animate__fadeInUpBig show").removeClass("fade");
        $(".news_left").addClass(" animate__animated animate__slideInRight show").removeClass("fade");
        $(".news_mid").addClass("animate__animated animate__slideInLeft show").removeClass("fade");
        $(".news_right").addClass(" animate__animated animate__slideInDown show").removeClass("fade");
    }
    /*if(scrT > nav){
        $(".nav").addClass("nav-show");
    }
    else if(scrT < nav){
        $(".nav").removeClass("nav-show");
    }*/
    /*let showheight = 500;
    if(scrT>backT){
        $('#bottom-totop').addClass('show').removeClass('fade');
    }*/
})
//加载后执行
window.onload = function(){

    //1.找到按钮
    var toTop = document.getElementById("bottom-totop");
    var st = null;
    
    toTop.style.opacity='0'
    //2.给按钮绑定点击事件
    toTop.onclick = function(){
            //周期性定时器在点击后触发,将事件放在定时器里面
        st = setInterval(function(){
            //3.获取滚动条距离浏览器的距离
            let backTop = document.documentElement.scrollTop || document.body.scrollTop;
            let mid=backTop/3;
            document.documentElement.scrollTop =backTop - mid;
            if(backTop == 0){
                clearInterval(st);
            }
        },30);
    }
    var nav = document.getElementById("nav");
    var navTop = nav.offsetTop;
    window.onscroll = function(){
        let backTop = document.documentElement.scrollTop;
        let showheight = 500;
        if(backTop > showheight){
            toTop.style.opacity = '1';
        }else{
            toTop.style.opacity = '0';
        }
        if(backTop>navTop){
            nav.style.position="fixed";
            nav.style.left="0";
            nav.style.top="0";
            nav.style.zIndex="100"
        }
        else{
            nav.style.position="";
        }
    }

    /*window.onscroll = function(){
        var scrTop = document.documentElement.scrollTop || document.body.scrollTop;
        var stopTop = 800;
        if(scrTop > stopTop){
            document.documentElement.scrollTop -=800;
        }
    }*/
}

    


