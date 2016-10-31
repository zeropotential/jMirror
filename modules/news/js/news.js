/*
* name: news.js
* author: JRMR
* date: 10/31/2016
*/

$(document).ready(function(){
	generateNews();
});

function generateNews(){
	var url = "https://api.nytimes.com/svc/news/v3/content/nyt/all.json";
	var html = "";
	$.ajax({
		url: url,
		type: 'GET',
		data: {'api-key' : KEY_NYTIMES, 'limit' : 5},
		beforeSend: function(jqXHR)
		{
			$("#news").html('Getting hot news for today...');
		},
		success: function(data)
		{
			$.each(data.results, function(i,val){
				html = html + "<div><b>" + val.title + "</b><p style = 'text-indent: 20px;'>" + val.abstract + "</p></div>";
			});
			$("#news").html(html);
		},
		error: function(e)
		{
			$("#news").html('Error on fetching daily news, please check your internet connectivity.');
		}	
	});
}