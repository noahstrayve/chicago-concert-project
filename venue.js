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



function Venue(name, address, phoneNumber, website, image)
{
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.website = website;
	this.image = image;

}

var uc = new Venue("United Center", "3000 w Madison", 
					"www.unitedcenter.com", "placeholder")

var aragon = new Venue("Aragon Ballroom","don't know", "www.aragon.com", "placeholder");

var metro = new  Venue("Metro","","","");

var riviera = new  Venue("Riviera","","","");

var hob = new Venue("House of Blues", "","","");


var venueArray = [uc, aragon, metro, riviera, hob];



function addInfo() {
	for (var i = 0; i < venueArray.length; i++) {
		
		console.log(venueArray[i].name);
		console.log(venueArray[i].address);
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