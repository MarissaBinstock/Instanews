$(document).ready(function(){
	console.log("ready");
		$('.overlay').hide()
		var optText = $("select").on('change',function(){
			$('.overlay').show()
			$('.landing').removeClass("full-height").addClass("change-height")
			console.log(this.value);
			var url ='https://api.nytimes.com/svc/topstories/v2/'+this.value+'.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
	

	$.getJSON(url).done(function(news){
		console.log(news.results[0])
		var original = $('.original');
		// console.log(news.results[0]);

		$.each(news.results, function(key,value){

			var abstract = (value.abstract)
			var articleURL = (value.url)
			var clone = original.clone()
			
			// console.log(value);
			if (typeof(value.multimedia[0]) !== undefined && value.multimedia.length !==0) {
				var photoURL = (value.multimedia[4].url)
				clone.children(".abstract").text(abstract);
				clone.children(".pic").append('<a href= "'+articleURL+'" >  <img src="'+ photoURL +'"> </a>');
			}
			else {
				return;
			}

		// $('.abstract').hide();
		original.remove();
		
		// var i=0
		// $('.original').each(function(i){
		// 	$(this).attr('id', 'item' +(i+1))
		// })

		if($('.original').length <12){
		$('.overlay').append(clone)
		}

		
		});
			})
		});
});