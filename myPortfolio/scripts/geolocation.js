function () {

    if (navigator.geolocation) {
        console.log("true")
    }

    function onPositionReceived(position) {
        console.log(position);
    }

    function locationNotReceived (positionError) {
        console.log(positionError);
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived, {timeout:01});
       var watch = navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived);
       console.log(watch);
        navigator.geolocation.clearWatch(watch);
    }

};