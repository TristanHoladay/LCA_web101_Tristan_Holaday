
// To Do List
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

// Geolocation API
$(document).ready(function($) {
    
    var $locdisplay = $('.coordinates')
    if (!navigator.geolocation) {
        $findMeBtn.addClass('disabled');
        $locdisplay.addClass('visible');
        $locdispaly.innerHTML = "The geolocation API is not supported by this browser.";
    } else {
            
            navigator.geolocation.getCurrentPosition(showPosition);
            
        }
});

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    $('.latitude').text(lat.toFixed(6) + '°');
    $('.longitude').text(lng.toFixed(6) + '°');
    $('.coordinates').addClass('visible');
};

// Refresh the Coordinates
$(function() {
    var $refresh = $('#refresh');
    var $newloc = $("<div></div>").text("New Location: ");

    $refresh.on('click', function(e) {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(showPosition);
        $('.coordinates').prepend($newloc);
        });
});

// Google Maps
$(function() {
    var $mapBtn = $('#mapBtn');

    $mapBtn.on('click', function(e) {
        e.preventDefault();

        
        var $mapLatLng = new google.maps.Latlng(lat, lng);

        var mapOptions = {
            zoom: 15,
            mapTypeControl: false,
            center: $mapLatLng,
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var mapMarker = new google.maps.Marker({
            position: mapLatLng,
            map: map,
            title: 'Your broswer/device places you here',
        });

        $(window).resize(function() {
            google.maps.event.trigger(map, 'resize');
            map.panTo(mapLatLng);
        });

    });
});


// Clicker Game
$(function() {

    var $gameBtn = $('#gameBtn');
    var $lvlBtn = $('#upgrade');
    var $stopBtn = $('#stopBtn');
    var $arr = $('.squares').toArray();
    var $icon = $('#robot');
    var $lvl = 0;
    var $damage = setDamage();
    var $money = 0;
    var $health = {};
    var $interval = 1000;



    function setDamage() {
        return (5 + ($lvl*2));
    };

    // Selects Grid Squares at Random and Appends Icon if They're Empty
    function randomId() {

        var $rannum = Math.floor(Math.random() * 17);
        var $id = $('#square' + $rannum);

        if (  $id.contents().length == 0 ) {
            $icon.css("display", "block");
            $id.append($icon);
        } else {

        };
    };
    

    // when the play button is clicked, execute these functions
    $gameBtn.on('click', function(e) {
        e.preventDefault();

            // Appends Icons to Grid Squares at Set Interval
            setInterval(function() {
                randomId();
            }, $interval);

            $('.money').text("Money = " + $money);
            $('.level').text("Level = " + $lvl);

            //Stops Game if Squares Fill Up
            if ( $('.squares').children($icon).length > 0) {
            } else {
                console.log("Still going");
            };

             //Handles Health and Money
            $(".squares").click(function () {
                var $myHealth = $health[$(this).attr('id')] || 100;
                
                if ($(this).children($icon).length > 0 ) {
                    $myHealth -= $damage;
                    $money += 2;  
                } else {
                    console.log("No Icon");
                };    
                
                if ($myHealth <= 0) {
                    $(this).children().remove();
                    $money += 10;
                    $myHealth = 100;
                }else {
                    console.log("Not Dead");
                };

                if ($money >= 300) {
                    $lvlBtn.css("background-color", "green");
                } else {
                    console.log("still transparent");
                };

                $health[$(this).attr('id')] = $myHealth
                $('.money').text("Money = " + $money);
            });
    
            

        // Levels Up the Player if Button is Clicked and Money is Sufficient 
            $lvlBtn.on('click', function(e) {
                e.preventDefault();

                if ($money >= 300) {
                    $lvl += 1;
                    $money -= 300;
                    $damage = setDamage();
                    $('.money').text("Money = " + $money);
                    $('.level').text("Level = " + $lvl);
                    $lvlBtn.css("background-color", "red");
                } else {
                    console.log("You Need More Money Honey");
                };

            });

        $stopBtn.on('click', function() {
            $("[id^=square]").children().remove();
            return;
        });


    });
    

});