 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyDIlnbkpqY2Eg-QNtpjUBcse4t5kpX8ICU",
   authDomain: "chicago-concert-project.firebaseapp.com",
   databaseURL: "https://chicago-concert-project.firebaseio.com",
   projectId: "chicago-concert-project",
   storageBucket: "chicago-concert-project.appspot.com",
   messagingSenderId: "655657671055"
 };
 firebase.initializeApp(config);

var database = firebase.database();


// constructor object for new venues
function Venue(name, address, website, image)
{
	this.name = name;
	this.address = address;
	this.website = website;
	this.image = image;
//hello
}
// initilize new venues below

var uc = new Venue("United Center", "1901 W Madison St, Chicago, IL 60612", 
					"www.unitedcenter.com", "placeholder")

var aragon = new Venue("Aragon Ballroom"," 1106 W Lawrence Ave, Chicago, IL 60640",
					 "www.thearagonballroom.com", "placeholder");

var metro = new  Venue("Metro","3730 N Clark St, Chicago, IL 60613","metrochicago.com","");

var riviera = new  Venue("Riviera"," 4746 N Racine Ave, Chicago, IL 60640","rivieratheatre.com","");

var hob = new Venue("House of Blues", "329 N Dearborn St, Chicago, IL 60654","houseofblues.com/chicago","");

var chicagoTheater = new Venue("Chicago Theater", "175 N State St, Chicago, IL 60601", "chicago-theater.com", "")


var venueArray = [uc, aragon, metro, riviera, hob, chicagoTheater];

// function that addsInfo to title page

function addInfo() {
	for (var i = 0; i < venueArray.length; i++) {
		var newDiv = $("<div>")
		newDiv.addClass(`${venueArray[i]}`);
		newDiv.text(venueArray[i].name);
		$("#con1").append(newDiv);
		console.log(venueArray[i].name);
		console.log(venueArray[i].address);
		console.log(venueArray[i].website);
		
		console.log("-----------------");

	}

}

addInfo();


// function printVenue(object){
// 	for (var i = 0; i < venueArray.length; i++) {
// 	console.log(venueArray[i].name);

// }

// }

// printVenue();