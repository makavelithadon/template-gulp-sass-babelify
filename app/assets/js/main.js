(function () {

    'use strict';

    document.addEventListener("DOMContentLoaded", function() {
        window.setTimeout(function () {
            var items = document.querySelectorAll('.tmpl__list__item');
            for (let i = 0, j = items.length; i < j; i++) {
                (function (i) {
                    window.setTimeout(function () {
                        items[i].classList.add('js--active');
                    }, i * 150);
                })(i);
            }
        }, 100);
    });
})();
