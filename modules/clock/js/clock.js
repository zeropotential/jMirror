// name: clock.js
// author: JRMR
// date: 10/30/2016

$(document).ready(function(){
	$("#greeting").html("Hello "+config.user.Nickname+", today is");
	generateDate();
	generateTime();
});

function generateTime()
{
	var today = new Date();
	var hrs = today.getHours();
	var mins = today.getMinutes();
	var secs = today.getSeconds();
	if(hrs == 0 && mins == 0 && secs == 0)
		generateDate();
	$("#clock").html(formatTime(hrs, mins, secs));
	setTimeout(generateTime, 900);
}

function formatNumeric(num)
{
	if(num < 10)
		return "0"+num;
	else
		return num;
}

function formatTime(h,m,s)
{
	var light = "AM";
	if(h >= 12)
	{
		light = "PM";
		h = h % 12;
	}
	if(h == 0)
		h = 12;

	return h + ":" + formatNumeric(m) + ":" + formatNumeric(s) + " " + light;
}

function generateDate()
{
	var today = new Date();
	var date = getDateString(today.getDate());
	var day = daysArr[today.getDay()];
	var month = monthsArr[today.getMonth()];
	var year = today.getFullYear();
	$("#date").html(day + ", " + date + " of " + month + " " + year);
}

function getDateString(num)
{
	var digit = num %10;
	if(digit == 1)
		return num+"st";
	else if(digit == 2)
		return num+"nd";
	else if(digit == 3)
		return num+"rd";
	else 
		return num+"th";
}