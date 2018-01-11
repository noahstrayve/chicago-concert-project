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

var venue = ["Aragon Ballroom", "United Center", "Metro", "The Riviera"
			"House of Blues", 

];


function Venue(name, address, phoneNumber, website, image)
{
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.website = website;
	this.image = image;

}

var UC = new Venue("United Center", "3000 w Madison", 
					"www.unitedcenter.com", "placeholder")