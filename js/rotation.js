window.addEventListener('load', function () {
    //1，获取元素
    var arrow_l = this.document.querySelector('.turns_img_left');
    var arrow_r = this.document.querySelector('.turns_img_right');
    var focus = document.querySelector('.turns_img');
    var mian_section = document.querySelector('.mian_section');
    var leftArrow = document.querySelector(".arrow-l")
    var rightArrow = document.querySelector(".arrow-r")
    leftArrow.addEventListener('mouseenter', function () {
        leftArrow.src = "../image/left1.png";
    })
    rightArrow.addEventListener('mouseenter', function () {
        rightArrow.src = "../image/right1.png";
    })
    leftArrow.addEventListener('mouseleave', function () {
        leftArrow.src = "../image/left.png";
    })
    rightArrow.addEventListener('mouseleave', function () {
        rightArrow.src = "../image/right.png";
    })

    var focusWidth = mian_section.offsetWidth;

    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000)

    })
    var ul = focus;
    var ol = mian_section.querySelector('.circle');
    for (var i = 0; i < focus.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);

        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        // alert(2);
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();

        }
    })

    var num = 0;
    var circle = 0;
    arrow_l.addEventListener('click', function () {
        // alert(2);
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            //调用函数
            circleChange();
        }
    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2500)

})