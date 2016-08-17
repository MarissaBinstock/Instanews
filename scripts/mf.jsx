		const motherFunction = (function(news){
		console.log(news.results[0])
		let original = $('.original');
		// console.log(news.results[0]);

		const getInfo = function(key,value){

			let abstract = (value.abstract)
			let articleURL = (value.url)
			let clone = original.clone()
			
			// console.log(value);
			if (typeof(value.multimedia[0]) !== undefined && value.multimedia.length !==0) {
				let photoURL = (value.multimedia[4].url)
				clone.children(".abstract").text(abstract);
				clone.children(".pic").append('<a href= "'+articleURL+'" ><img src="'+ photoURL +'"></a>');
			}
			else {
				return;
			}

		original.remove();
		
			if($('.original').length <12){
			$('.overlay').append(clone)
			}
		}

		$.each(news.results, getInfo);
			})