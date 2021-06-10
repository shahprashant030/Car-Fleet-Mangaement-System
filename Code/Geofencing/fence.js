function setup() {
	  var config = {
		  apiKey: "AIzaSyDnXbHijKd7cXxnPoLczZc8ELxFkW025c4",
		  authDomain: "gpslocation-266416.firebaseapp.com",
		  databaseURL: "gpslocation-266416.firebaseio.com",
		  storageBucket: "gpslocation-266416.appspot.com",
		  messagingSenderId: "120436243292"
		  };
	firebase.initializeApp(config);
	database = firebase.database();
	
	var ref = database.ref('Latitude');
  ref.on('value', gotData, errData);
  //var firebaselat = database.firebaselat('Latitude');
	//firebaselat.on('value', gotData, errData);
	//var firebaselng = database.firebaselng('Longitude');
	//firebaselng.on('value', gotData, errData);
}

function gotData(data){
	console.log(data.val());
}

function errData(err){
	console.log(err);
}


   window.onload = function() {
        var startPos;
        var startPosLat;
        var startPosLong;
        var distance;
      
        if (navigator.geolocation) {

          startPosLat = 13.128579;
          startPosLong = 77.587287;

          $("#startLat").text(startPosLat);
          $("#startLon").text(startPosLong);
		  
		  
      
          navigator.geolocation.watchPosition(function(position) {
            $("#currentLat").text(position.coords.latitude);
            $("#currentLon").text(position.coords.longitude);

            distance = calculateDistance(startPosLat, startPosLong,startPosLat, startPosLong)
            $("#distance").text(distance);

            if(distance < 1){
              $("#message").text("Yes, were inside 1 KM!!! :)")
            }else if(distance > 1){
              $("#message").text("No, not inside 1 KM :(")
            }
          });
		  
		  $("#new").text(firebaselat);
		  $("#new").text(data);
        }
      };
      
      // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
      // http://www.movable-type.co.uk/scripts/latlong.html
      // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
      function calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = (lat2-lat1).toRad();
        var dLon = (lon2-lon1).toRad();
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d;
      }
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }