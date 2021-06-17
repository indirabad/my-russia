(function($) {

    $(".app_btn-delete").hover(
        function() {
            $(this).parent().addClass("form__row-delete");
        },
        function() {
            $(this).parent().removeClass("form__row-delete");
        });


    let changeTheme = function() {
        $('.app__theme-dark').click(function() {
            $("body").addClass("theme-dark");
        });
        $('.app__theme-light').click(function() {
            $("body").removeClass("theme-dark");
        });
    };

    let rangeSlider = function() {
        let $slider = $('.range-slider'),
            $range = $('.range-slider__range'),
            $value = $('.range-slider__value');
        $slider.each(function() {

            $value.each(function() {
                let value = $(this).prev().attr('value');
                $(this).html(value);
            });
            $range.on('input', function() {
                $rangeWrapper = $(this).parent();
                let middle = (Number.parseFloat(this.max) + Number.parseFloat(this.min)) / 2;
                if (this.value < middle) {
                    $rangeWrapper.next($value).html(0);
                    $rangeWrapper.prev($value).html(this.value);
                } else
                if (this.value > middle) {

                    $rangeWrapper.prev($value).html(0);
                    $rangeWrapper.next($value).html(this.value);
                } else {
                    $rangeWrapper.next($value).html(middle);
                    $rangeWrapper.next($value).html(middle);
                }
            });
        });
    };

    rangeSlider();
    
    changeTheme();

})(jQuery);