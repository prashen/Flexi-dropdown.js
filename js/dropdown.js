/*
    Plugin Name: Dropdown.js
    Description Tags: dropdown.js | custom class | full-width/normal/dynamic-top | body click dropdown content hide
    Created: 02/02/2016
    Version: 1.0
    Author: https://github.com/prashen
    Options:
        - dropdownWidth
        - dropdownTopAuto
        - customClass
*/
;
(function($) {
    "use strict";
    $.fn.dropdown = function(options) {
            var targetClick = $(this).children('.js-dp-click'),
                targetContent = $(this).children('.js-dp-content'),
                eleHeight;


            // Extend our default options
            var settings = $.extend({}, $.fn.dropdown.defaults, options);

            // binding click events
            this.bind("click.dropdown", function() {
                targetClick.toggleClass('target');
                targetContent.toggleClass('toggleHideShow');
                targetClick.parents('body').find('.js-dp-content').not($(this).children('.js-dp-content')).removeClass('toggleHideShow');
                $(this).parents('body').find('.target').not($(this).children('.js-dp-click')).removeClass('target');
            });

            return this.each(function(index, el) {
                // dropdownWidth - if it's not undefined && equal to true
                if (settings.dropdownWidth !== 'undefined' && settings.dropdownWidth == true) {
                    targetContent.css({
                        width: '100%'
                    });
                }

                // dropdownTopAuto - if it's not undefined && equal to true
                if (settings.dropdownTopAuto !== 'undefined' && settings.dropdownTopAuto == true) {
                    eleHeight = targetClick.innerHeight();
                    targetContent.css({
                        top: eleHeight
                    });
                }

                // customClass - if it's not undefined
                if (settings.customClass !== 'undefined') {
                    $(this).addClass(settings.customClass);
                }
            })
        },

        // plugin defaults - added as a property on our plugin function.
        $.fn.dropdown.defaults = {
            dropdownWidth: false,
            dropdownTopAuto: true,
            customClass: 'undefined'
        }
}(jQuery));
