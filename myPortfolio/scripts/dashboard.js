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
    var $locdisplay = $('#geolocation');

    if (!navigator.geolocation) {
        $$findMeBtn.addClass('disabled');
        $locdisplay.addClass('visible');
        $locdispaly.innerHTML = "The geolocation API is not supported by this browser.";
    } else if (location.protocol !== 'https:') {
        
        if (window.top === window.self) {
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        } else {
            $locdisplay.addClass('disabled');
            $locdisplay.addClass('visible');
            $locdisplay.innerHTML = "Not on HTTPS: ... Most browsers require HTTPS: for the geolocation API.";
        };
    } else {

        $findMeBtn.on('click', function(e) {
            e.preventDefault();
            
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude.toFixed(6);
                var lng = position.coords.longitude.toFixed(6);

                $locdisplay.addClass('visible');
                $locdisplay.innerHTML = "Your coordinates are:<br>" + "Latitude: " + lat + "°<br>" + "Longitude: " + lng + "°";
            };
        });
    };
});
