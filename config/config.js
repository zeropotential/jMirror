/* 	
*	Filename: Config.json
*	Stores all the modules you want to use
*	Parameters:
*     userdetails:
*        Location - exact location of the user
*        Country - country of the user
*     modules:
*	 	   ModuleName - Name of the module you want "fb, news"
*		   Position - Location on where you want to put the module:
*		      Available Positions: 
*			     Top-Right
*			     Top-Left
*			     Bottom-Right
*			     Bottom-Left
*			     Center
*/

var config = {
   "modules":[
      {
         "ModuleName":"clock",
         "Position":"Top-Left"
      },
      {
         "ModuleName":"weather",
         "Position":"Top-Right"
      },
      {
         "ModuleName": "news",
         "Position:": "Bottom"
      }
   ],
   "user":
      {
         "Nickname": "John",
         "Location":"Sta. Mesa, Manila, Philippines",
         "Country":"Philippines"
      }
};

var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/*
   API KEYS 
*/

var KEY_GOOGLE = "AIzaSyC5a0TeqRip4VaruDBKqihimSlB0oD7uRI";
var KEY_NYTIMES = "4ce5300462ca4da29a7c06902dd57c35";
