$(document).ready(function () {
    $("body").on("submit", "form.ajax", function (d) {
        d.preventDefault();
        var b = $(this);
        b.data("submitted") || (b.data("submitted", !0).find('[type="submit"]').append(AJAX_LOADER), $.ajax({
            cache: !1, data: b.serialize(), error: function (a) {
                a = "exception.error" + a.status;
                var c = Translator.trans(a);
                c === a && (c = Translator.trans("exception.error"));
                noty({text: c, type: "error"})
            }, success: function (a) {
                "undefined" !== typeof a.message && "undefined" !== typeof a.success && noty({
                    text: Translator.trans(a.message),
                    type: a.success ? "success" : "error"
                });
                var c = b.parents(".fancybox-inner").eq(0).children(), d = c.length ? c : $(b.data("container"));
                !c.length && a.success ? (c = {
                    expander: !1, fitToView: !0, openEffect: "none", closeEffect: "none", theme: "light", tpl: {
                        closeBtn: '<a title="' + Translator.trans("fancybox.close_btn") + '" class="fancybox-close" href="javascript:;"></a>',
                        error: '<p class="fancybox-error">' + Translator.trans("fancybox.error") + "</p>",
                        next: '<a title="' + Translator.trans("fancybox.next") + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="' + Translator.trans("fancybox.prev") + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    }
                }, $.fancybox.open($.extend({}, c, {
                    content: a.html,
                    padding: 0,
                    minWidth: 300,
                    minHeight: 50
                })), b.find("input, textarea").val("")) : d.replaceWith("undefined" !== typeof a.html ? a.html : a)
            }, type: b.attr("method"), url: b.attr("action")
        }))
    }).on("submit", "form.ajaxMultipart", function (d) {
        d.preventDefault();
        var b = $(this);
        d = new FormData(b[0]);
        b.data("submitted") || (b.data("submitted", !0).find('[type="submit"]').append(AJAX_LOADER),
            $.ajax({
                cache: !1,
                data: d,
                enctype: "multipart/form-data",
                processData: !1,
                contentType: !1,
                error: function (a) {
                    a = "exception.error" + a.status;
                    var c = Translator.trans(a);
                    c === a && (c = Translator.trans("exception.error"));
                    noty({text: c, type: "error"})
                },
                success: function (a) {
                    "undefined" !== typeof a.message && "undefined" !== typeof a.success && noty({
                        text: Translator.trans(a.message),
                        type: a.success ? "success" : "error"
                    });
                    var c = b.parents(".fancybox-inner").eq(0).children();
                    (c.length ? c : $(b.data("container"))).replaceWith("undefined" !==
                    typeof a.html ? a.html : a)
                },
                type: b.attr("method"),
                url: b.attr("action")
            }))
    }).on("click", ".js-pipe-category-item,.js-pipe-category-row", function () {
        var d = $(this).prop("href");
        d || (d = $(this).find(".js-pipe-category-item").prop("href"));
        $(".js-pipe-category-content").load(d);
        return !1
    });
    $(document).bind("ajaxComplete", function () {
        $("form.ajax").removeData("submitted")
    })
});

function sendFormMulty() {
    var d = $(this).parent(), b = $(this).attr("action");
    $(this).serialize();
    event.preventDefault();
    var a = $(this)[0], a = new FormData(a);
    $("#btnSubmit").prop("disabled", !0);
    $.ajax({
        type: "POST",
        enctype: "multipart/form-data",
        url: b,
        data: a,
        processData: !1,
        contentType: !1,
        cache: !1,
        timeout: 6E5,
        success: function (a) {
            d.html(a);
            $(".js-images-list").each(function () {
                var a = $(this).data("url");
                $(this).load(a)
            })
        },
        error: function (a) {
            console.log("ERROR : ", a)
        }
    })
};

$(document).ready(function () {
    if ($(".captcha_refresh")) {
        var a;
        (a = function () {
            $(".captcha_input").inputmask("9999")
        })();
        $(document).bind("ajaxSuccess", a);
        $(document).bind("fancyboxShow", a);
        $("body").on("click", ".captcha_refresh", function (a) {
            a.preventDefault();
            $(this).siblings("img.captcha_image").attr("src", Routing.generate("captcha_refresh") + "?" + Math.random())
        })
    }
});

$(document).ready(function () {
    var b;
    addTimes();
    (b = function () {
        $("select").chosen({allow_single_deselect: !0})
    })();
    $(document).bind("ajaxSuccess", b);
    $(".call_time").chosen().change(function () {
        $(this).closest("form").find(".js-time").val($(this).val())
    })
});

function addTimes() {
    var b = $(".call_time"), a = new Date;
    for (hour = a.getHours() + 1; 18 > hour; hour++) b.append('<option value="' + hour + ':00">' + hour + ":00</option>");
    for (hour = 9; 18 > hour; hour++) b.append('<option value="' + (a.getDate() + 1) + "." + (a.getMonth() + 1) + "." + (a.getYear() - 100) + " " + hour + ':00">' + (a.getDate() + 1) + "." + (a.getMonth() + 1) + "." + (a.getYear() - 100) + " \u0432 " + hour + ":00</option>")
};

$(document).bind("ajaxComplete", function () {
    $(".ajax_loader").remove()
});

$(document).ready(function () {
    if ($(".content.contacts").length) {
        var e = $(".map_select"), d = $(".map_toggle");
        if (e.length && d.length) {
            var f = $("#map"), g = $(".map_container"), c = null;
            d.click(function (a) {
                a.preventDefault();
                a = $(this);
                e.hide();
                g.hide();
                var b = a.data("current");
                d.removeData("current");
                b || (a.data("current", !0), a = $('.map_select[data-index="' + a.data("index") + '"]'), a.length && (b = a.filter(".current"), b.length || (b = a.first()), b.trigger("click"), g.show(), a.css("display", "inline-block")))
            });
            e.click(function (a) {
                a.preventDefault();
                var b = $(this);
                a = b.data("latitude");
                var d = b.data("longitude");
                if (a !== f.data("latitude") || d !== f.data("longitude")) f.data("latitude", a), f.data("longitude", d), e.filter('[data-index="' + b.data("index") + '"]').removeClass("current"), b.addClass("current"), null === c && (b = new google.maps.StyledMapType(GOOGLE_MAPS_STYLE, {name: "Styled Map"}), c = new google.maps.Map(document.getElementById("map"), GOOGLE_MAPS_OPTIONS), c.mapTypes.set("map_style", b), c.setMapTypeId("map_style")), a = new google.maps.LatLng(a, d), c.setCenter(a),
                    new google.maps.Marker({
                        clickable: !1,
                        icon: new google.maps.MarkerImage(MAP_MARKER, new google.maps.Size(45, 61), new google.maps.Point(0, 0), new google.maps.Point(23, 61)),
                        map: c,
                        position: a
                    })
            });
            $(".zoom_plus").click(function (a) {
                a.preventDefault();
                a = c.getZoom();
                c.setZoom(a + 1)
            });
            $(".zoom_minus").click(function (a) {
                a.preventDefault();
                a = c.getZoom();
                c.setZoom(a - 1)
            })
        }
    }
});

$(document).ready(function () {
    var a = $(".easytabs");
    if (a.length) {
        var d = a.find("a"), e = function () {
            for (var a = 0; a < d.length; a++) {
                var b = d.eq(a),
                    c = b.hasClass("collapsed") || !b.hasClass("active") ? "easytabs.caption.collapsed" : "easytabs.caption.active",
                    c = Translator.trans(c);
                b.attr("title", c)
            }
        };
        a.bind("easytabs:midTransition", e).easytabs({
            defaultTab: "li:first-child",
            animationSpeed: "fast",
            collapsible: !0,
            transitionIn: "slideDown",
            transitionInEasing: "linear",
            transitionOut: "slideUp",
            transitionOutEasing: "linear",
            transitionCollapse: "slideUp",
            transitionCollapseEasing: "linear",
            transitionUncollapse: "slideDown",
            transitionUncollapseEasing: "linear"
        });
        var f = setInterval(function () {
            a.data("easytabs") && (e(), clearInterval(f))
        }, 100)
    }
});

$(document).ready(function () {
    var a = {
            expander: !1,
            fitToView: !0,
            openEffect: "none",
            closeEffect: "none",
            padding: 10,
            theme: "light",
            tpl: {
                closeBtn: '<a title="' + Translator.trans("fancybox.close_btn") + '" class="fancybox-close" href="javascript:;"></a>',
                error: '<p class="fancybox-error">' + Translator.trans("fancybox.error") + "</p>",
                next: '<a title="' + Translator.trans("fancybox.next") + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="' + Translator.trans("fancybox.prev") + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }
        },
        b = $.extend({}, a, {padding: 0}), c;
    (c = function () {
        $("a.fancybox").fancybox($.extend({}, a, {helpers: {thumbs: !0}}));
        $("a.fancybox_dark").fancybox($.extend({}, a, {helpers: {thumbs: !0}, theme: "dark"}));
        $("a.fancybox_dialog").fancybox(b);
        $("a.fancybox_inline").click(function (a) {
            a.preventDefault();
            $.fancybox($.extend({}, b, {content: $($(this).attr("href")).html()}));
            $(document).trigger("fancyboxShow")
        })
    })();
    $(document).bind("ajaxSuccess", c)
});

var GOOGLE_MAPS_OPTIONS = {
    disableDefaultUI: !0,
    navigationControl: !1,
    scaleControl: !1,
    scrollwheel: !1,
    streetViewControl: !1,
    zoom: 16
}, GOOGLE_MAPS_STYLE = [{stylers: [{gamma: .4}, {hue: "#00ffe6"}, {saturation: -100}]}, {
    elementType: "geometry",
    featureType: "road",
    stylers: [{lightness: 20}, {saturation: -100}, {visibility: "on"}]
}, {elementType: "labels", featureType: "road", stylers: [{lightness: 20}]}, {
    elementType: "labels.text.stroke",
    featureType: "road",
    stylers: [{visibility: "on"}]
}, {
    elementType: "geometry", featureType: "poi.park",
    stylers: [{lightness: 30}]
}];

$(document).ready(function () {
    var a;
    (a = function () {
        $(".input_mask_decimal_positive").inputmask("decimal", {allowMinus: !1, rightAlign: !1});
        $(".input_mask_email").inputmask("email");
        $(".input_mask_phone").inputmask("+7 (\\999) 999-99-99")
    })();
    $(document).bind("ajaxSuccess", a);
    $(document).bind("fancyboxShow", a)
});

$.noty.defaults = $.extend({}, $.noty.defaults, {killer: !0, layout: "bottomRight", theme: "relax"});

$(window).load(function () {
    var a = $(".parallax");
    if (!(0 >= a.length)) {
        var c = function () {
            a.each(function () {
                var b = $(this), d = $("img", b).outerHeight(), a = b.outerHeight(), c = b.offset().top + a;
                b.attr("data-parallax-velocity", (d - a) / c)
            })
        }, e = $(window).height();
        c();
        $(window).scroll(function () {
            var b = $(window).scrollTop();
            a.each(function () {
                var a = $(this);
                e + b >= a.offset().top && $("img", a).css({top: -parseFloat(a.attr("data-parallax-velocity")) * b})
            })
        }).resize(function () {
            c()
        })
    }
});

var initOwlSliders = function (a) {
    a = a ? a : $("body");
    a = $(".js-slider", a);
    if (0 >= a.length) return !1;
    a.each(function (a, b) {
        $(b).owlCarousel({
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            autoplay: !0,
            autoplayHoverPause: !1,
            autoplayTimeout: 1E4,
            dots: !0,
            items: 1,
            loop: !0,
            nav: !0
        })
    })
};
$(document).ready(function () {
    initOwlSliders()
});

var $calculatorData = $(".js-calculatorData");
angular.module("pipeCalculator", []).controller("calculatorController", ["$scope", function (a) {
    var c = this;
    this._manualTons = !1;
    this.setManualTons = function (a) {
        this._manualTons = a
    };
    this.isManualTons = function () {
        return this._manualTons
    };
    this.calcTonsPerMeter = function () {
        var b = a.data.thickness / 1E3;
        return 7850 * Math.PI * b * (a.data.diameter / 1E3 - b) / 1E3
    };
    this.updateTotalPrice = function () {
        var b = this.isManualTons() ? a.data.pricePerTon * a.data.tons : a.data.pricePerMeter * a.data.meters;
        a.data.totalPrice = isNaN(b) ? "0.00" : b.toFixed(2);
        a.data.message = "";
        a.data.message += Translator.trans("pipe_calculator.diameter.placeholder") + ": " + a.data.diameter + " " + Translator.trans("pipe_calculator.diameter.label");
        a.data.message += "\n" + Translator.trans("pipe_calculator.thickness.placeholder") + ": " + a.data.thickness + " " + Translator.trans("pipe_calculator.thickness.label");
        a.data.message += "\n" + Translator.trans("pipe_calculator.tons.placeholder") + ": " + a.data.tons + " " + Translator.trans("pipe_calculator.tons.label");
        a.data.message += "\n" + Translator.trans("pipe_calculator.price_per_ton.placeholder") +
            ": " + a.data.pricePerTon + " " + Translator.trans("pipe_calculator.price_per_ton.label");
        a.data.message += "\n" + Translator.trans("pipe_calculator.price_per_meter.placeholder") + ": " + a.data.pricePerMeter + " " + Translator.trans("pipe_calculator.price_per_meter.label");
        a.data.message += "\n-----\n* " + Translator.trans("pipe_calculator.total_price.placeholder") + ": " + a.data.totalPrice + " " + Translator.trans("pipe_calculator.total_price.label");
        $calculatorData.data("message", a.data.message)
    };
    a.data = {
        diameter: "", thickness: "",
        tons: "", meters: "", pricePerTon: "", pricePerMeter: "", totalPrice: "", message: ""
    };
    a.updateMetersOrTons = function () {
        var b = c.calcTonsPerMeter();
        c.isManualTons() ? (a.updateMeters(b), a.updatePricePerMeter()) : (a.updateTons(b), a.updatePricePerTon())
    };
    a.updateMeters = function (b) {
        "undefined" === typeof b && (b = c.calcTonsPerMeter());
        b = a.data.tons / b;
        a.data.meters = !isNaN(b) && b ? b.toFixed(3) : "";
        c.setManualTons(!0)
    };
    a.updateTons = function (b) {
        "undefined" === typeof b && (b = c.calcTonsPerMeter());
        b *= a.data.meters;
        a.data.tons = !isNaN(b) &&
        b ? b.toFixed(3) : "";
        c.setManualTons(!1)
    };
    a.updatePricePerMeter = function () {
        c.setManualTons(!0);
        var b = a.data.pricePerTon * a.data.tons / a.data.meters;
        a.data.pricePerMeter = !isNaN(b) && b ? b.toFixed(2) : ""
    };
    a.updatePricePerTon = function () {
        c.setManualTons(!1);
        var b = a.data.pricePerMeter * a.data.meters / a.data.tons;
        a.data.pricePerTon = !isNaN(b) && b ? b.toFixed(2) : ""
    };
    a.$watch("data", function () {
        c.updateTotalPrice()
    }, !0)
}]);

$(document).ready(function () {
    var b = $(".perfect-scroll");
    b.length && b.each(function () {
        var a = $(this), b = a.attr("data-hide-scrollX") ? a.attr("data-hide-scrollX") : !1,
            c = a.attr("data-hide-scrollY") ? a.attr("data-hide-scrollY") : !1;
        a.perfectScrollbar({suppressScrollY: c, suppressScrollX: b})
    })
});


$(document).ready(function () {
    $(window).scrollTop();
    var b = $(".main_menu").offset().top, a = $(".js-header"), c = $(".js-header").height();
    $(window).scroll(function () {
        $(window).scrollTop() > b ? (a.addClass("header--fixed"), a.parent().css("padding-bottom", c + "px")) : (a.removeClass("header--fixed"), a.parent().css("padding-bottom", ""))
    }).scroll()
});

$(document).ready(function () {
    $("body").on("change", "input[type=file]", fileChange).on("click", ".remove-tag", function (b) {
        b.preventDefault();
        1 == $(this).closest("form").find(".js-files").find(" > .row").length && addField($(this));
        $(this).parent().remove();
        return !1
    });
    $(".js-files").each(function (b, a) {
        addField($(a))
    })
});

function addField(b) {
    var a = b ? b.closest("form") : $(this).closest("form");
    b = a.find(".js-files");
    var c = a.find("*[data-prototype]").data("prototype"),
        a = b.data("index") ? b.data("index") : b.find(":input").length ? b.find(":input").length - 1 : 0;
    b.data("index", a + 1);
    c = c.replace(/__name__/g, a);
    0 < a && (a = b.find(".row"), a.find("remove-tag").length || a.append('<a class="remove-tag" href="#">\u2716</a>'));
    a = $(c);
    b.append(a);
    return !1
}

var fileChange = function () {
    var b = $(this).val().split("\\").pop(), a = $(this).closest(".file_selector");
    a.length && (a.find(".file_message").text(b), addField($(this)))
};

$(document).ready(function () {
    (function () {
        var a = $(".pipe_calculator.widget"), b = a.outerWidth();
        a.css({left: -b}).on("click", ".opener, .close", function (d) {
            d.preventDefault();
            a.hasClass("opened") ? a.removeClass("opened").animate({left: -b}, 500) : a.addClass("opened").animate({left: 0}, 500)
        })
    })();
    $(".pipe_consultant .opener").click(function () {
        $(this).parent().toggleClass("opened");
        return !1
    });
    $(".js-consultant-close").click(function () {
        $(this).parent().removeClass("opened");
        return !1
    });
    $(document).on("click", 'a.btn[href^="#"]',
        function (a) {
            a.preventDefault();
            a = $.attr(this, "href");
            var b = $(this).data("offset") || 0;
            1 < a.length && (b = $(a).offset().top - b, b = 0 < b ? b : 0, $("html, body").animate({scrollTop: b}, 1E3))
        });
    $(".fancybox-media").fancybox({openEffect: "none", closeEffect: "none", padding: 0, helpers: {media: {}}});
    var a = $(".js-orderMessage");
    $(".js-fancyboxOrder").each(function (c, b) {
        $(b).click(function () {
            a.val($(b).data("message"))
        })
    });
    $(".used_pipes.widget body");
    variableTitle()
});
$(window).load(function () {
    $(".img").each(function () {
        var a = $(this).parent().find(".desc");
        a.length && a.innerHeight() > $(this).parent().height() ? $(this).height(a.innerHeight()) : $(this).height($(this).parent().height())
    });
    alignCatText()
});

function variableTitle() {
    var a = $(".js-title"), c = $(".js-short-title");
    $("header .form .query").on("focus", function () {
        $(this).animate({width: 455}, 500);
        a.fadeOut(250, function () {
            c.fadeIn(250)
        })
    }).on("blur", function () {
        $(this).animate({width: 250}, 500);
        c.fadeOut(250, function () {
            a.fadeIn(250)
        })
    })
}

function alignCatText() {
    var a = $(".js-column-text"), c = $(".js-column-image");
    a.length && c.length && a.height() >= c.height() - 45 && (a.height(c.height() - 45).css("overflow", "hidden").css("position", "relative"), isOverflowed(a[0]) && a.append('<a href="javascript:;" class="more_text">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435</a>'), a.find(".more_text").click(function () {
        $(this).parent().css("height", "");
        $(this).parent().css("margin-bottom", "20px");
        $(this).fadeOut(300)
    }))
}

function isOverflowed(a) {
    return a.scrollWidth > a.offsetWidth || a.scrollHeight > a.offsetHeight
};

var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    initSlidingMenus = function (a) {
        a = a ? a : $("body");
        a = $(".js-menu", a);
        if (0 >= a.length) return !1;
        a.each(function (a, b) {
            var c = $(b).data("mode"), d = $(b).find(".js-menu__switcher"), e = $(b).find(".js-menu__options");
            d.click(function (a) {
                a.preventDefault();
                a.stopPropagation();
                d.toggleClass("menu-switcher--active");
                c ? e.toggleClass("menu-options--active") : e.slideToggle(500)
            })
        })
    }, initMapHelpers = function (a) {
        a = a ? a : $("body");
        a = $(".map_select", a);
        var f = $("#map");
        if (0 >= a.length) return !1;
        a.each(function (a, c) {
            $(c).click(function () {
                $("html, body").stop().animate({scrollTop: f.offset().top}, 1E3)
            })
        })
    };
if (1280 >= browserWidth) var variableTitle = function () {
}, alignCatText = function () {
};
$(document).ready(function () {
    initSlidingMenus();
    720 >= browserWidth && initMapHelpers()
});
