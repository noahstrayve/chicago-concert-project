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

var venueArray = [uc, aragon, metro, riviera, hob];

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


$("#con1").text(uc.name);
$("#con2").text(aragon.name);
$("#con3").text(metro.name);
$("#con4").text(riviera.name);
$("#con5").text(hob.name);

console.log("linked");