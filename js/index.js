$(document).ready(function() {
    generateContent();
    sidebarShow();
})

function generateContent() {
    var h = $("h1,h2,h3,h4,h5,h6",".primary .post-content");
    for(var i=0;i<h.length;i++){
        $(h[i]).before("<a name='link" + i +"'></a>");
        $("<li><a href='#link" + i + "'></a></li>").appendTo("#content .content-text");
        $(h[i]).clone().appendTo("#content .content-text li:last a");
    }
}

/**
 * 侧边目录
function generateContent() {
    if (typeof $('#markdown-toc').html() === 'undefined') {
        $('#content').remove();
    } else {
        $('#content .content-text').html('<ul>' + $('#markdown-toc').html() + '</ul>');
        $('#markdown-toc').remove();
    }
}
*/
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