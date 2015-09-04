$( document ).ready(function() {

$('.sendRequest').click(function(){
      sendRequest();      

      function sendRequest() {
      		var parms = "title=" + $("#textBox").val() + "&format=JSONP";
      		
      		// Other parameters
      		//parms += "&lang=en-us&actors=S";
      		
      		$("#countries").text("");
      		$("#actors").text("");
      		
      		$.ajax({
                  data:		parms,
                  url:		'http://www.myapifilms.com/imdb',
                  type:		'get',
                  dataType:	'jsonp',
                  beforeSend: function () {},
                  success:  function (response, textStatus, jqXHR) {
                  	$.each(response, function(index, element){
                  		if (element.countries != undefined) {
                  			$.each(element.countries, function(index, country){
                  				$("#countries").append(country + ", ");
                  			});
                  		}
                  		if (element.actors != undefined) {
                  			$.each(element.actors, function(index, actor){
                  				$("#actors").append(actor.actorName + " - " + actor.actorId + ", ");
                  			});
                  		}
                  	});
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                  	$("#error").text(textStatus + "; " + errorThrown);
                  }
          	});
      	}
      });
});