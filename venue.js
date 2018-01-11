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

//localize selectors.
var con1 = $("#con1");
var con2 = $("#con2");
var con3 = $("#con3");
var con4 = $("#con4");
var con5 = $("#con5");
var con6 = $("#con6");

var name;
var address;
var website;
var image;
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
var selectorArray = [con1, con2, con3, con4, con5, con6];
var attrArray = [name, address, website, image];

// function that addsInfo to title page
// take each venue from array
// 
function addInfo() {
	for (var i = 0; i < venueArray.length; i++) {
		var event = venueArray[i];
		var venueSelect = selectorArray[i];
		var venueAttr = attrArray[i];
		venueSelect.text(event[venueAttr[i]]);
		var newDiv = $("<div>")
		newDiv.addClass(`${venueArray[i]}`);
		newDiv.text(event.address, event.website);
		// newDiv.text(event.website);
		selectorArray[i].append(newDiv);
		// console.log(venueArray[i].name);
		// console.log(venueArray[i].address);
		// console.log(venueArray[i].website);
		
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