$(function () {
    portfolio.init();
})

const portfolio = {
    init: function () {
        portfolio.handleSideMenu();
        portfolio.getScroll();
        portfolio.backTop();
        portfolio.scrollTo();
        portfolio.slide();
        portfolio.dataFade();
    },

    handleSideMenu: function () {
        $(".btn-menu").on("click", function () {
            $("html").addClass("open-side-menu");
        })

        $(".screen").on("click", function () {
            $("html").removeClass("open-side-menu");
        });
    },

    getScroll: function () {
        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var sectionHomeHeight = $('.section-home').innerHeight();
            if(scrollTop > 180) {
                $("html").addClass("get-scroll");
            } else {
                $("html").removeClass("get-scroll");
            }

            if(scrollTop > sectionHomeHeight) {
                $("html").addClass("show-header")
            } else {
                $("html").removeClass("show-header")
            }

            if(scrollTop > 600) {
                $("html").addClass("need-back-top");
            } else {
                $("html").removeClass("need-back-top");
            }
        });
    },

    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            })
        });
    },

    scrollTo: function () {
        $('.main-header li').on('click', function () {
            $(this).addClass('is_active').siblings().removeClass('is_active');
            $('html').removeClass('open-side-menu');
            const menuIndex = $(this).index();
            const sectionOffset = $('.scroll').eq(menuIndex).offset();
            const offsetTop = sectionOffset.top;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 600)
        });
    },

    slide: function () {
        $('.testimonial-slide').slick({
            prevArrow: $(".slick-prev"),
            nextArrow: $(".slick-next")
        });

        $('.blog-slide, .portfolio-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
            ]
        });

        $('.portfolio-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
            ]
        });
    },

    dataFade: function () {
        $(window).on('scroll', function () {
            const sct = $(this).scroll.top();
            $("[data-fade]").each(function () {
                const oft = $(this).offset.top();
                if(sct > oft-150) {
                    $(this).addClass('on')
                } else {
                    $(this).removeClass('on')
                }
            })
        })
    }

};






























