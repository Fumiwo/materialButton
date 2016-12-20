$(function() {
    var $window = window;
    $('.js-effect').on('click', function (e) {
        e.preventDefault();
    
        $(this).append('<span class="click-effect"></span>');
        $(this).addClass('bg-effect');
    
        var $clickEffect = $(this).find('.click-effect');
    
        $window.setTimeout(function () {
          $clickEffect.remove();
          $('.dialog-button').removeClass('bg-effect'); 
        }, 1000);
    });
});