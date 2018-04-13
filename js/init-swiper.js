! function () {
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                // html 的层级 #mySlides 在 .swiper-container 的外面
                // 所以上面这个方法是找不到元素的
                this.swiperOptions
            )
        }
    }
    controller.init(view)
}.call()