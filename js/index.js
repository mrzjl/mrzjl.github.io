$(document).ready(function() {
    generateContent();
    sidebarShow();
    smoothScroll();
})


/*生成目录*/
function generateContent() {
    var h = $("h1,h2,h3,h4,h5,h6",".primary .post-content");
    for(var i=0;i<h.length;i++){
        $(h[i]).before("<a name='link" + i +"'></a>");
        $("<li><a href='#link" + i + "'></a></li>").appendTo("#content .content-text");
        $(h[i]).clone().appendTo("#content .content-text li:last a");
    }
}

/*锚链接平滑滚动*/
function smoothScroll(){   
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 56;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                500);
                return false;
            }
        }
    });
}


/*点击菜单键显示栏*/
function sidebarShow(){
    $("#menu-icon").click(function(){
        $(".secondary:first").toggleClass("show-sidebar");
        return false;
    });
}

function categoryDisplay() {
    /*only show All*/
    $('.primary>div[post-cate!=All]').hide();
    /*show category when click categories list*/
    $('.categories-list-item').click(function() {
        var cate = $(this).attr('cate'); //get category's name

        $('.post-list-body>div[post-cate!=' + cate + ']').hide(250);
        $('.post-list-body>div[post-cate=' + cate + ']').show(400);
    });
}