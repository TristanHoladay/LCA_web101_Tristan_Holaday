$(function() {

    let $itemField = $('#itemField');



    let $list = $('#todo');
    let $newItemForm = $('#newItemForm');

        $newItemForm.on('submit', function(e) {
            if ($itemField.val() == false) {
                alert("You Haven't Inputted Text!");
                return;
            }
            
            e.preventDefault();  
            let text = $('input[type="text"]').val();
            $list.append(`<li>${text}</li>`);
            $('input[type="text"]').val('');
            
        });

    $list.on('click', 'li', function() {

        let $this = $(this);
        $this.remove();
    });

});

$(document).ready(function($) {
    
    var $findMeBtn = $('#find-me');
    var $locdisplay = $('.coordinates')
    if (!navigator.geolocation) {
        $findMeBtn.addClass('disabled');
        $locdisplay.addClass('visible');
        $locdispaly.innerHTML = "The geolocation API is not supported by this browser.";
    } else {

        $findMeBtn.on('click', function(e) {
            e.preventDefault();
            
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                $('.latitude').text(lat.toFixed(6) + '°');
                $('.longitude').text(lng.toFixed(6) + '°');
                $('.coordinates').addClass('visible');
            });
        });
    };
});
