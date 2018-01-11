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
var con1 = $("#name0");
var con2 = $("#address0");
var con3 = $("#website0");
var con4 = $("#image0");
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
var selectArray = [];
// function that addsInfo to title page
// take each venue from array
// 
//function to get selector names from length of venue array
function getSelectors() {
	for (var i = 0; i < venueArray.length; i++) {
		venueArray[i]

		var name ="name"+[i];
		var address = "address"+[i];
		var website = "website"+[i];
		var image = "image"+[i];
		
		selectArray.push(name);
		selectArray.push(address);
		selectArray.push(website);
		selectArray.push(image);
		// console.log(selectArray);
	}

}

var newDiv = $("<div>")

function addInfo() {
	for (var i = 0; i < venueArray.length; i++) {
		var event = venueArray[i];
		var venueSelect = selectorArray[i];
		// var venueAttr = attrArray[i];
		
		// newDiv.text(event.address, event.website);
		// newDiv.text(event.website);
		
		// console.log(venueArray[i].name);
		// console.log(venueArray[i].address);
		// console.log(venueArray[i].website);
		
		console.log("-----------------");



		var newContainer = `<div class="row col-md-6 col-sm-6 col-xs-6 venue">`+
							`<div class="panel panel-default">`+
							`<div class="panel-heading">`+
							`<h3 class="panel-title">${event.name}</h3>`+
							`<div class="panel-body">`+
							`<div class="row">`+
							`<div class="col-md-6">`+
							`<div class="row">`+
							`<div class="col-md-12 address">${event.address}</div>`+
							`<div class="row">`+
							`<div class="col-md-12 website">${event.website}</div>`+
							`<div class="col-md-6 image">img placeholder</div>`;

							

							
		$(".top").append(newContainer);

	
	}

}

addInfo();

// function printVenue(object){
// 	for (var i = 0; i < venueArray.length; i++) {
// 	console.log(venueArray[i].name);

// }

// }

// printVenue();