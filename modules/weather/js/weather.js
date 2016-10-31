// name: weather.js
// author: JRMR
// date: 10/30/2016

$(document).ready(function(){
	generateLongLat();
});


function generateLongLat()
{
	var location = config.user.Location;
	var geoCoder = new google.maps.Geocoder();
	return geoCoder.geocode({'address': location},
		function(results, status)
		{
			if(status == 'OK')
			{
				$("#location").html('1-week weather forecast at ' + location);
				callWeatherForecast(results[0].geometry.location);
			}
		}
	);
}

function callWeatherForecast(location)
{
	var url = 'https://api.darksky.net/forecast/aeff1f893f6891138bc8bdea664f59c9/'+location.lat()+','+location.lng()+'?units=si&exclude=hourly';
	$.ajax({
		url: url,
		dataType: 'jsonp',
		type: 'GET',
		success: function(data)
		{
			generateWeatherForecast($("#weather"), data);
		},
		error: function(e)
		{
			$("#weather").html('Error occured on getting todays forecast, please check your internet connection');
		}
	});
}

function generateWeatherForecast(cont, data)
{
	//cont.html(JSON.stringify(data));
	var html = "";
	$.each(data.daily.data, function(i, val){
		var date = new Date(val.time * 1000);
		var dateNum = date.getDate();
		var day = daysArr[date.getDay()].substring(0,3);
		var month = monthsArr[date.getMonth()].substring(0,3);

		var dateStr = day + ", "+ month + " " + dateNum;
		var summary = val.summary;
		var icon = val.icon;
		var tempMin = val.temperatureMin;
		var tempMax = val.temperatureMax;
		
		html = html + "<div><div class = '"+icon+"'></div><div class='weathersummary'>" + dateStr + "  " + summary + "</div></div>";
	});
	cont.html(html);
}