jQuery(document).ready(function($) {
    var hasShownPopup = false;

    function checkCookie(name) {
        return document.cookie.split(';').some(function(item) {
            return item.trim().indexOf(name + '=') == 0
        });
    }

    function setCookie(name, value, days) {
        var expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + value + ';expires=' + expires + ';path=/';
    }

    function showPopup() {
        if (!checkCookie(popxitParams.cookieName)) {
            $('#popxit-popup').show();
            hasShownPopup = true;
        }
    }

    $(document).mouseleave(function(e) {
        if (!hasShownPopup && e.clientY < 0) {
            showPopup();
        }
    });

    $('#popxit-close-button, #popxit-template-button').on('click', function() {
        $('#popxit-popup').hide();
        setCookie(popxitParams.cookieName, 'true', 30);
    });
});
