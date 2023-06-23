// jQuery
$(() => {
    // 购物车模块
    $('.shopping').mouseover(() => {
        $('.shopping_cart').stop().slideDown(100);
        $('.shopping_cart').mouseover(() => {
            $('.shopping').css({
                'background': 'white',
                'box-shadow': '1px 1px 10px #c7ccc8',
                'color': '#ff6a00',
            })
            $('.shopping_cart').stop().slideDown(100);
        })
        // $('.shopping_cart').css('display','block')
        $('.shopping').css({
            'background': 'white',
            'box-shadow': '1px 1px 10px #c7ccc8',
            'color': '#ff6a00',
        })

    })
    $('.shopping').mouseleave(() => {
        $('.shopping_cart').stop().slideUp();
        $('.shopping_cart').mouseleave(() => {
            $('.shopping_cart').stop().slideUp();
            $('.shopping').css({
                'background': '#424242',
                'box-shadow': '0px 0px 0px #c7ccc8',
                'color': '#b0b0b0'
            })
        })
        $('.shopping').css({
            'background': '#424242',
            'box-shadow': '0px 0px 0px #c7ccc8'
        })
    })


    $('.nav_input .nav_text').focus(() => {
        $('.nav_text_list').css('display', 'block');
        $('.nav_sub').css({
            'border': '1px solid #ff6700',
            'border-style': 'solid solid solid hidden',
        });
        $('.nav_text').css('border', '1px solid #ff6700');

    });
    $('.nav_input .nav_text').blur(() => {
        $('.nav_text_list').css('display', 'none');
        $('.nav_sub').css({
            'border': '1px solid #b0b0b0',
            'border-style': 'solid solid solid hidden',
        });
        $('.nav_text').css('border', '1px solid #b0b0b0');
    })
    $('.nav_sub').mouseover(() => {
        $('.nav_sub').css({
            'background': '#ff6a00',
            'color': 'white',
        })
    })
    $('.nav_sub').mouseleave(() => {
        $('.nav_sub').css({
            'background': '0',
            'color': '#616161',
        })
    })

    // ----------------------------------------------------
    // 鼠标经过下拉区域
    $(".nav li").eq(0).mouseover(() => {
        $('.nav li').eq(0).siblings().mouseover(() => {
            fun();
        })
        $(".mouseover_top_down_1").eq(0).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(0).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(0).mouseover(() => {
            $(".mouseover_top_down_1").eq(0).stop().slideDown();
        })
    })

    $(".nav li").eq(1).mouseover(() => {
        $('.nav li').eq(1).siblings().mouseover(() => {
            fun();
        });
        $(".mouseover_top_down_1").eq(1).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(1).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(1).mouseover(() => {
            $(".mouseover_top_down_1").eq(1).stop().slideDown();
        })
    })
    $(".nav li").eq(2).mouseover(() => {
        $('.nav li').eq(2).siblings().mouseover(() => {
            fun();
        })
        $(".mouseover_top_down_1").eq(2).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(2).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(2).mouseover(() => {
            $(".mouseover_top_down_1").eq(2).stop().slideDown();
        })
    })
    $(".nav li").eq(3).mouseover(() => {
        $('.nav li').eq(3).siblings().mouseover(() => {
            fun();
        })
        $(".mouseover_top_down_1").eq(3).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(3).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(3).mouseover(() => {
            $(".mouseover_top_down_1").eq(3).stop().slideDown();
        })
    })
    $(".nav li").eq(4).mouseover(() => {
        $('.nav li').eq(4).siblings().mouseover(() => {
            fun();
        })
        $(".mouseover_top_down_1").eq(4).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(4).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(4).mouseover(() => {
            $(".mouseover_top_down_1").eq(4).stop().slideDown();
        })
    })
    $(".nav li").eq(5).mouseover(() => {
        $('.nav li').eq(5).siblings().mouseover(() => {
            fun();
        })
        $(".mouseover_top_down_1").eq(5).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(5).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(5).mouseover(() => {
            $(".mouseover_top_down_1").eq(5).stop().slideDown();
        })
    })
    $(".nav li").eq(6).mouseover(() => {
        $('.nav li').eq(6).siblings().mouseover(() => {
            fun();
        })
        $(".mouseover_top_down_1").eq(6).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(6).stop().slideDown(400);
        $(".mouseover_top_down_1").eq(6).mouseover(() => {
            $(".mouseover_top_down_1").eq(6).stop().slideDown();
        })
    })

    // 鼠标离开

    $(".nav li").eq(0).mouseleave(() => {
        $(".mouseover_top_down_1").eq(0).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(0).stop().slideUp();
        $(".mouseover_top_down_1").eq(0).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })
    $(".nav li").eq(1).mouseleave(() => {
        $(".mouseover_top_down_1").eq(1).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(1).stop().slideUp();
        $(".mouseover_top_down_1").eq(1).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })
    $(".nav li").eq(2).mouseleave(() => {
        $(".mouseover_top_down_1").eq(2).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(2).stop().slideUp();
        $(".mouseover_top_down_1").eq(2).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })
    $(".nav li").eq(3).mouseleave(() => {
        $(".mouseover_top_down_1").eq(3).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(3).stop().slideUp();
        $(".mouseover_top_down_1").eq(3).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })
    $(".nav li").eq(4).mouseleave(() => {
        $(".mouseover_top_down_1").eq(4).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(4).stop().slideUp();
        $(".mouseover_top_down_1").eq(4).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })
    $(".nav li").eq(5).mouseleave(() => {
        $(".mouseover_top_down_1").eq(5).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(5).stop().slideUp();
        $(".mouseover_top_down_1").eq(5).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })
    $(".nav li").eq(6).mouseleave(() => {
        $(".mouseover_top_down_1").eq(6).siblings().css('display', 'none');
        $(".mouseover_top_down_1").eq(6).stop().slideUp();
        $(".mouseover_top_down_1").eq(6).mouseleave(() => {
            $(".mouseover_top_down").stop().slideUp();
        })
    })

    let fun = () => {
        $(".nav li").eq(0).mouseover(() => {
            $(".mouseover_top_down_1").eq(0).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(0).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(0).mouseover(() => {
                $(".mouseover_top_down_1").eq(1).stop().slideDown();
            })
        })
        $(".nav li").eq(1).mouseover(() => {
            $(".mouseover_top_down_1").eq(1).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(1).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(1).mouseover(() => {
                $(".mouseover_top_down_1").eq(1).stop().slideDown();
            })
        })
        $(".nav li").eq(2).mouseover(() => {
            $(".mouseover_top_down_1").eq(2).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(2).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(2).mouseover(() => {
                $(".mouseover_top_down_1").eq(2).stop().slideDown();
            })
        })
        $(".nav li").eq(3).mouseover(() => {
            $(".mouseover_top_down_1").eq(3).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(3).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(3).mouseover(() => {
                $(".mouseover_top_down_1").eq(3).stop().slideDown();
            })
        })
        $(".nav li").eq(4).mouseover(() => {
            $(".mouseover_top_down_1").eq(4).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(4).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(4).mouseover(() => {
                $(".mouseover_top_down_1").eq(4).stop().slideDown();
            })
        })
        $(".nav li").eq(5).mouseover(() => {
            $(".mouseover_top_down_1").eq(5).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(5).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(5).mouseover(() => {
                $(".mouseover_top_down_1").eq(5).stop().slideDown();
            })
        })
        $(".nav li").eq(6).mouseover(() => {
            $(".mouseover_top_down_1").eq(6).siblings().css('display', 'none');
            $(".mouseover_top_down_1").eq(6).stop().slideDown(400);
            $(".mouseover_top_down_1").eq(6).mouseover(() => {
                $(".mouseover_top_down_1").eq(6).stop().slideDown();
            })
        })

    }

    // 分类列表特效
    // 鼠标经过

    $('.mian_list li').eq(0).mouseover(() => {
        $('.list_module').eq(0).css('display', 'block');
        $('.list_module').eq(0).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(1).mouseover(() => {
        $('.list_module').eq(1).css('display', 'block');
        $('.list_module').eq(1).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(2).mouseover(() => {
        $('.list_module').eq(2).css('display', 'block');
        $('.list_module').eq(2).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(3).mouseover(() => {
        $('.list_module').eq(3).css('display', 'block');
        $('.list_module').eq(3).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(4).mouseover(() => {
        $('.list_module').eq(4).css('display', 'block');
        $('.list_module').eq(4).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(5).mouseover(() => {
        $('.list_module').eq(5).css('display', 'block');
        $('.list_module').eq(5).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(6).mouseover(() => {
        $('.list_module').eq(6).css('display', 'block');
        $('.list_module').eq(6).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(7).mouseover(() => {
        $('.list_module').eq(7).css('display', 'block');
        $('.list_module').eq(7).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(8).mouseover(() => {
        $('.list_module').eq(8).css('display', 'block');
        $('.list_module').eq(8).siblings().css('display', 'none');
    })
    $('.mian_list li').eq(9).mouseover(() => {
        $('.list_module').eq(9).css('display', 'block');
        $('.list_module').eq(9).siblings().css('display', 'none');
    });
    // 鼠标离开

    $('.mian_list li').eq(0).mouseleave(() => {
        $('.list_module').eq(0).css('display', 'none');
        $('.list_module').eq(0).mouseover(() => {
            $('.list_module').eq(0).css('display', 'block');
            $('.list_module').eq(0).mouseleave(() => {
                $('.list_module').eq(0).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(1).mouseleave(() => {
        $('.list_module').eq(1).css('display', 'none');
        $('.list_module').eq(1).mouseover(() => {
            $('.list_module').eq(1).css('display', 'block');
            $('.list_module').eq(1).mouseleave(() => {
                $('.list_module').eq(1).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(2).mouseleave(() => {
        $('.list_module').eq(2).css('display', 'none');
        $('.list_module').eq(2).mouseover(() => {
            $('.list_module').eq(2).css('display', 'block');
            $('.list_module').eq(2).mouseleave(() => {
                $('.list_module').eq(2).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(3).mouseleave(() => {
        $('.list_module').eq(3).css('display', 'none');
        $('.list_module').eq(3).mouseover(() => {
            $('.list_module').eq(3).css('display', 'block');
            $('.list_module').eq(3).mouseleave(() => {
                $('.list_module').eq(3).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(4).mouseleave(() => {
        $('.list_module').eq(4).css('display', 'none');
        $('.list_module').eq(4).mouseover(() => {
            $('.list_module').eq(4).css('display', 'block');
            $('.list_module').eq(4).mouseleave(() => {
                $('.list_module').eq(4).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(5).mouseleave(() => {
        $('.list_module').eq(5).css('display', 'none');
        $('.list_module').eq(5).mouseover(() => {
            $('.list_module').eq(5).css('display', 'block');
            $('.list_module').eq(5).mouseleave(() => {
                $('.list_module').eq(5).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(6).mouseleave(() => {
        $('.list_module').eq(6).css('display', 'none');
        $('.list_module').eq(6).mouseover(() => {
            $('.list_module').eq(6).css('display', 'block');
            $('.list_module').eq(6).mouseleave(() => {
                $('.list_module').eq(6).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(7).mouseleave(() => {
        $('.list_module').eq(7).css('display', 'none');
        $('.list_module').eq(7).mouseover(() => {
            $('.list_module').eq(7).css('display', 'block');
            $('.list_module').eq(7).mouseleave(() => {
                $('.list_module').eq(7).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(8).mouseleave(() => {
        $('.list_module').eq(8).css('display', 'none');
        $('.list_module').eq(8).mouseover(() => {
            $('.list_module').eq(8).css('display', 'block');
            $('.list_module').eq(8).mouseleave(() => {
                $('.list_module').eq(8).css('display', 'none');
            })
        })
    });
    $('.mian_list li').eq(9).mouseleave(() => {
        $('.list_module').eq(9).css('display', 'none');
        $('.list_module').eq(9).mouseover(() => {
            $('.list_module').eq(9).css('display', 'block');
            $('.list_module').eq(9).mouseleave(() => {
                $('.list_module').eq(9).css('display', 'none');
            })
        })
    });
    // 智能穿戴
    $('.cellphone_Mobile_one_1 span').mouseover(() => {
        $('.cellphone_Mobile_two_right_1').css('display', 'block');
        $('.cellphone_Mobile_two_right_2').css('display', 'none');
        $('.cellphone_Mobile_one_1 span').addClass('capacity_underline');
        $('.cellphone_Mobile_one_1 h4').removeClass('capacity_underline');
    });
    $('.cellphone_Mobile_one_1 h4').mouseover(() => {
        $('.cellphone_Mobile_two_right_1').css('display', 'none');
        $('.cellphone_Mobile_two_right_2').css('display', 'block');
        $('.cellphone_Mobile_one_1 h4').addClass('capacity_underline');
        $('.cellphone_Mobile_one_1 span').removeClass('capacity_underline');
    });
    // 生活电器
    $('.cellphone_Mobile_life span').mouseover(() => {
        $('.cellphone_Mobile_two_right_one').css('display', 'block');
        $('.cellphone_Mobile_two_right_two').css('display', 'none');
        $('.cellphone_Mobile_two_right_three').css('display', 'none');
        $('.cellphone_Mobile_two_right_four').css('display', 'none');
        $('.cellphone_Mobile_life span').addClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(0).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(1).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(2).removeClass('cellphone_Mobile_life_class');
    });

    $('.cellphone_Mobile_life h4').eq(0).mouseover(() => {
        $('.cellphone_Mobile_two_right_one').css('display', 'none');
        $('.cellphone_Mobile_two_right_two').css('display', 'block');
        $('.cellphone_Mobile_two_right_three').css('display', 'none');
        $('.cellphone_Mobile_two_right_four').css('display', 'none');
        $('.cellphone_Mobile_life h4').eq(0).addClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(1).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(2).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life span').removeClass('cellphone_Mobile_life_class');
    });
    $('.cellphone_Mobile_life h4').eq(1).mouseover(() => {
        $('.cellphone_Mobile_two_right_one').css('display', 'none');
        $('.cellphone_Mobile_two_right_two').css('display', 'none');
        $('.cellphone_Mobile_two_right_three').css('display', 'block');
        $('.cellphone_Mobile_two_right_four').css('display', 'none');
        $('.cellphone_Mobile_life h4').eq(0).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(1).addClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(2).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life span').removeClass('cellphone_Mobile_life_class');
    });
    $('.cellphone_Mobile_life h4').eq(2).mouseover(() => {
        $('.cellphone_Mobile_two_right_one').css('display', 'none');
        $('.cellphone_Mobile_two_right_two').css('display', 'none');
        $('.cellphone_Mobile_two_right_three').css('display', 'none');
        $('.cellphone_Mobile_two_right_four').css('display', 'block');
        $('.cellphone_Mobile_life h4').eq(0).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(1).removeClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life h4').eq(2).addClass('cellphone_Mobile_life_class');
        $('.cellphone_Mobile_life span').removeClass('cellphone_Mobile_life_class');
    });
    // 底部微信
    $('.attention img').eq(0).mouseover(() => {
        $('.attention img')[0].src = '../image/wb@2x.png';
    })
    $('.attention img').eq(0).mouseleave(() => {
        $('.attention img')[0].src = '../image/wb.png';
    })
    $('.attention img').eq(1).mouseover(() => {
        $('.attention img')[1].src = '../image/wx@2x.png';
        $('.attention_div').css('display', 'block');
    })
    $('.attention img').eq(1).mouseleave(() => {
        $('.attention img')[1].src = '../image/wx.png';
        $('.attention_div').css('display', 'none');
    })


    // 右侧边栏区域
    $('.right_aside ul li').eq(0).mouseover(() => {
        $('.right_aside img')[0].src = '../image/app1.png';
        $('.right_aside p').eq(0).css('color', '#ff6a00');
        $('.right_aside_ewm').css('display', 'block');

    });
    $('.right_aside ul li').eq(0).mouseleave(() => {
        $('.right_aside img')[0].src = '../image/app2.png';
        $('.right_aside p').eq(0).css('color', '#999999');
        $('.right_aside_ewm').css('display', 'none');

    });

    $('.right_aside ul li').eq(1).mouseover(() => {
        $('.right_aside img')[1].src = '../image/personal2.png';
        $('.right_aside p').eq(1).css('color', '#ff6a00');

    });
    $('.right_aside ul li').eq(1).mouseleave(() => {
        $('.right_aside img')[1].src = '../image/personal1.png';
        $('.right_aside p').eq(1).css('color', '#999999');

    });
    $('.right_aside ul li').eq(2).mouseover(() => {
        $('.right_aside img')[2].src = '../image/shouhou2.png';
        $('.right_aside p').eq(2).css('color', '#ff6a00');

    });
    $('.right_aside ul li').eq(2).mouseleave(() => {
        $('.right_aside img')[2].src = '../image/shouhou1.png';
        $('.right_aside p').eq(2).css('color', '#999999');

    });
    $('.right_aside ul li').eq(3).mouseover(() => {
        $('.right_aside img')[3].src = '../image/kefu2.png';
        $('.right_aside p').eq(3).css('color', '#ff6a00');

    });
    $('.right_aside ul li').eq(3).mouseleave(() => {
        $('.right_aside img')[3].src = '../image/kefu1.png';
        $('.right_aside p').eq(3).css('color', '#999999');

    });
    $('.right_aside ul li').eq(4).mouseover(() => {
        $('.right_aside img')[4].src = '../image/buycar2.png';
        $('.right_aside p').eq(4).css('color', '#ff6a00');

    });
    $('.right_aside ul li').eq(4).mouseleave(() => {
        $('.right_aside img')[4].src = '../image/buycar1.png';
        $('.right_aside p').eq(4).css('color', '#999999');

    });
    $('.right_aside ul li').eq(5).mouseover(() => {
        $('.right_aside img')[5].src = '../image/returntop2.png';
        $('.right_aside p').eq(5).css('color', '#ff6a00');

    });
    $('.right_aside ul li').eq(5).mouseleave(() => {
        $('.right_aside img')[5].src = '../image/returntop1.png';
        $('.right_aside p').eq(5).css('color', '#999999');

    });

    // 回到顶部
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > $('.main_brother_1_cellphone_scroll')[0].offsetTop) {
            $('.right_aside ul li').eq(5).css('display', 'block');
            $('.right_aside ul li').eq(5).click(() => {
                window.scroll(0, 0);
            })
        } else if (window.pageYOffset < $('.main_brother_1_cellphone_scroll')[0].offsetTop) {
            $('.right_aside ul li').eq(5).css('display', 'none');
        }
    });

})



