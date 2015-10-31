$(document).ready(function() {
    generateContent();
    categoryDisplay();
    sidebarShow();
})

/**
 * 侧边目录
 */
function generateContent() {

    // console.log($('#markdown-toc').html());
    if (typeof $('#markdown-toc').html() === 'undefined') {
        // $('#content .content-text').html('<ul><li>文本较短，暂无目录</li></ul>');
        $('#content').remove();
    } else {
        $('#content .content-text').html('<ul>' + $('#markdown-toc').html() + '</ul>');
        /*   //数据加载完成后，加固定边栏*/
        $('#markdown-toc').remove();
        /* 移除原来的目录 */
    }
    console.log("myAffix!!!");
}

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