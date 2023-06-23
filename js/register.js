$(() => {
    $('.input_one').eq(0).focus(() => {
        $('.login_label').css({
            'font-size': '12px',
            'top': '-18px'
        })
        $('.input_one').eq(0).css({
            'border': '1px solid #ff6a00'
        })
    });
    $('.input_one').eq(0).blur(() => {
        $('.login_label').css({
            'font-size': '16px',
            'top': '0px'
        })
        $('.input_one').eq(0).css({
            'border': '0px solid #ff6a00'
        })
    });
    $('.input_one').eq(1).focus(() => {
        $('.login_label_1').css({
            'font-size': '12px',
            'top': '-18px'
        })
        $('.input_one').eq(1).css({
            'border': '1px solid #ff6a00'
        })
    });
    $('.input_one').eq(1).blur(() => {
        $('.login_label_1').css({
            'font-size': '16px',
            'top': '0px'
        })
        $('.input_one').eq(1).css({
            'border': '0px solid #ff6a00'
        })
    })
    $('.input_one').eq(2).focus(() => {
        $('.login_label_2').css({
            'font-size': '12px',
            'top': '-18px'
        })
        $('.input_one').eq(2).css({
            'border': '1px solid #ff6a00'
        })
    });
    $('.input_one').eq(2).blur(() => {
        $('.login_label_2').css({
            'font-size': '16px',
            'top': '0px'
        })
        $('.input_one').eq(2).css({
            'border': '0px solid #ff6a00'
        })
    });
    $('.input_sub').mouseover(() => {
        $('.input_sub').css('background', '#f6d2bc');
    })
    $('.input_sub').mouseleave(() => {
        $('.input_sub').css('background', '#ffbe99');
    })

    // 鼠标经过二维码
    $('.login_right_main_2_1').mouseover(() => {
        $('.login_right_main_2_1 img')[0].src = '../image/logineem1.png';
        $('.login_right_main_2_2').css('display', 'block');
    })
    $('.login_right_main_2_1').mouseleave(() => {
        $('.login_right_main_2_1 img')[0].src = '../image/logineem.png';
        $('.login_right_main_2_2').css('display', 'none');
    })




})