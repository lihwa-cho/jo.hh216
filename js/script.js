//$("nav > ul > li").mouseover(function(){
//    $(this).find("ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $(this).find("ul.sub").stop().slideUp(200);
//});


// 메뉴부분 전체

//$("nav > ul > li").mouseover(function(){
//    $("ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $("ul.sub").stop().slideUp(200);
//});
//


// 메뉴부분 브라우저 전체

$("nav > ul > li").mouseover(function(){
    $(".nav_bg, ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
    $(".nav_bg, ul.sub").stop().slideUp(200);
});

