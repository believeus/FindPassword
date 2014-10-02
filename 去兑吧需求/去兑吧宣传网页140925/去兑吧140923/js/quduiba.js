$(function(){
    //点击登录

    $('.qdb-header-register').click(function(){
        $('.qdb-login').fadeIn(300);
        $('.qdb-white-bg').show();
        $('#registerBtn').addClass("qdb-cur").siblings().removeClass('qdb-cur')
        $('#loginPanel').hide();
        $('#registerPanel').show();
        $('.close').bind("click",function(){
            $('.qdb-white-bg').hide();
            $('.qdb-login').fadeOut(300);
        })
        return false;
    })
    $('#loginBtn').click(function(){
        $(this).addClass("qdb-cur").siblings().removeClass('qdb-cur')
        $(".gray").val("");
        $('#loginPanel').show();
        $('#registerPanel').hide();
    })

    $('#registerBtn').click(function(){
        $(this).addClass("qdb-cur").siblings().removeClass('qdb-cur')
        $('#loginPanel').hide();
        $('#registerPanel').show();
    })

    //返回顶部
    $.fn.toTop = function(options) {
        var defaults = {
            showHeight : 150,
            speed : 1000
        };
        var options = $.extend(defaults,options);
        $("body").prepend("<div id='totop'><a>返回顶部</a></div>");
        var $toTop = $(this);
        var $top = $("#totop");
        var $ta = $("#totop a");
        $toTop.scroll(function(){
            var scrolltop=$(this).scrollTop();
            if(scrolltop>=options.showHeight){
                $top.show();
            }
            else{
                $top.hide();
            }
        });
        $ta.hover(function(){
            $(this).addClass("cur");
        },function(){
            $(this).removeClass("cur");
        });
        $top.click(function(){
            $("html,body").animate({scrollTop: 0}, options.speed);
        });
    }

})




//验证码等待60重新发送
function key_button() {
    var sec = $("#sec").text();
    $("#sec").text(--sec);
    if (sec > 0){
        setTimeout("key_button();", 1000);
    }
    else{
        $('#key_button').text('免费获取短信验证');
        $('#key_button').removeAttr("disabled");
    }
}
//加入收藏
function shoucang(sTitle,sURL)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
} 
