window.onload = function () {
    slider.loadSlider();
    //console.log("work")
    //init();
    slider.menu();
    slider.employ();
    // var t = setInterval(function () {
    //     document.getElementById("right").click();
    //     console.log("--")
    // },2000);
    // t;
};
var slider = {
    sliderDir: "image/",
    slide: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg'
        // '6.jpg',
        // '7.jpg',
        // '8.jpg',
        // '9.jpg',
        // '10.jpg'
    ],
    sliderPosition: [-50, 50, 150],//начальные кординаты изображений
    frame: 0,//номер картинки
    slideSpeed: 1000,//время анимации 1секунда = 1000
    click: true,
    right:document.getElementById("right"),
    left:document.getElementById("left"),
    loadImage: function (position1, position2, position3) {
        switch (this.slide.length) {
            case 0:
                break;
            case 1:
                document.getElementById("scr").style.background =
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length - 1) % this.slide.length)
                        ] + ") " + position1 + "% no-repeat ," +
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length - 1) % this.slide.length)
                        ] + ") " + position2 + "% no-repeat ," +
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length - 1) % this.slide.length)
                        ] + ") " + position3 + "% no-repeat";
                break;
            case 2:
                document.getElementById("scr").style.background =
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length + 1) % this.slide.length)
                        ] + ") " + position1 + "% no-repeat ," +
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length) % this.slide.length)
                        ] + ") " + position2 + "% no-repeat ," +
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length + 1) % this.slide.length)
                        ] + ") " + position3 + "% no-repeat";
                break;
            default:
                document.getElementById("scr").style.background =
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length - 1) % this.slide.length)
                        ] + ") " + position1 + "% no-repeat ," +
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length) % this.slide.length)
                        ] + ") " + position2 + "% no-repeat ," +
                    "url(" + this.sliderDir + this.slide[
                        Math.abs((this.frame + this.slide.length + 1) % this.slide.length)
                        ] + ") " + position3 + "% no-repeat";
                break;
        }
    },
    loadSlider: function () {
        this.loadImage(
            this.sliderPosition[this.frame],
            this.sliderPosition[this.frame + 1],
            this.sliderPosition[this.frame + 2]
        );
    },
    menu: function () {
        var menu = document.getElementById("menu");
        for (var i = 0; i < this.slide.length; i++) {
            if (i == 0) {
                menu.innerHTML = menu.innerHTML +
                    "<button class='elem_menu elem_menu_active' id='num_img" + i + "'" +
                    "onclick='slider.employMenu(" + i + ");'></button>";
            }
            else {
                menu.innerHTML = menu.innerHTML +
                    "<button class='elem_menu' id='num_img" + i + "'" +
                    "onclick='slider.employMenu(" + i + ");'></button>";
            }
        }
    },
    employ: function () {
        var sl = this;
        right.onclick = function () {
            if (sl.click) {
                sl.click = false;
                document.getElementById("num_img" + sl.frame).classList.remove("elem_menu_active");
                sl.frame++;
                document.getElementById("num_img" + sl.frame).classList.toggle("elem_menu_active");
                var start = Date.now();
                var img1 = -50, img2 = 50, img3 = 150;
                var timer = setInterval(function () {
                    var timePas = Date.now() - start;
                    img1 = ((0.5 * sl.slideSpeed - timePas) / sl.slideSpeed * 100);
                    img2 = ((1.5 * sl.slideSpeed - timePas) / sl.slideSpeed * 100);
                    img3 = ((2.5 * sl.slideSpeed - timePas) / sl.slideSpeed * 100);
                    sl.loadImage(img1, img2, img3);
                    if (timePas > sl.slideSpeed) {
                        clearInterval(timer);
                        sl.loadImage(-50, 50, 150);
                        sl.click = true;
                    }
                }, 20);
                sl.click = false;
            }
        };
        left.onclick = function () {
            if (sl.click) {
                sl.click = false;
                document.getElementById("num_img" + sl.frame).classList.remove("elem_menu_active");
                sl.frame--;
                document.getElementById("num_img" + sl.frame).classList.toggle("elem_menu_active");
                var start = Date.now();
                var img1 = -50, img2 = 50, img3 = 150;
                var timer = setInterval(function () {
                    var timePas = Date.now() - start;
                    img1 = ((-1.5 * sl.slideSpeed + timePas) / sl.slideSpeed * 100);
                    img2 = ((-0.5 * sl.slideSpeed + timePas) / sl.slideSpeed * 100);
                    img3 = ((0.5 * sl.slideSpeed + timePas) / sl.slideSpeed * 100);
                    sl.loadImage(img1, img2, img3);
                    if (timePas > sl.slideSpeed) {
                        clearInterval(timer);
                        sl.loadImage(-50, 50, 150);
                        sl.click = true;
                    }
                }, 20);
                sl.click = false;
            }
        };
    },
    employMenu: function (e) {
        if ((e - this.frame) == 0) return;

        // if ((e - this.frame) > 0) {
        //     if ((e - this.frame) > (this.slide.length / 2)) {
        //         var n1 = Math.abs(this.slide.length - (e - this.frame));
        //         console.log(n1 + " --- 1.1  ---- 1  " + (e - this.frame));
        //         this.goLeft(n1);
        //         console.log(n1 + " --- 1.1  ---- 2  " + (e - this.frame));
        //         return;
        //     }
        //     else {
        //         var n2 = Math.abs(e - this.frame);
        //         console.log(n2 + " --- 2.1  ---- 3  " + (e - this.frame));
        //         //menu_l(n2);
        //         console.log(n2 + " --- 2.2  ---- 4  " + (e - this.frame));
        //         return;
        //     }
        // }
        // else {
        //     if ((e - this.frame) > (this.slide.length / 2)) {
        //         var n3 = Math.abs(this.slide.length + (e - this.frame));
        //         console.log(n3 + " --- 3.1  ---- 5   " + (e - this.frame));
        //         //menu_l(n3);
        //         console.log(n3 + " --- 3.2  ---- 6   " + (e - this.frame));
        //         return;
        //     }
        //     else {
        //         var n4 = Math.abs(e - this.frame);
        //         console.log(n4 + " --- 4.1  ---- 7   " + (e - this.frame));
        //         //menu_r(n4);
        //         console.log(n4 + " --- 4.2  ---- 8   " + (e - this.frame));
        //         return;
        //     }
        // }
    }


};