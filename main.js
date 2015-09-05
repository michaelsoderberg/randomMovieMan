$(document).ready(function () {

    //get250TopTitles();
    sendRequest();
    function get250TopTitles() {
      var start = Math.floor(Math.random() * 250) + 1;
        var parms = "start=" + start + "&end=" + start + "&format=JSONP";
        //var parms = "?title=air%bud&format=JSONP";

        $.ajax({
            data: parms,
            url: 'http://www.myapifilms.com/imdb/top',
            type: 'GET',
            data: {
                format: "JSONP"
            },
            dataType: 'jsonp',
            success: function (response, textStatus, jqXHR) {
                console.log('Random movie');
                printMovie(response[0]); 
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#error").text(textStatus + "; " + errorThrown);
            }
        });
    }

    function sendRequest() {

      var start = Math.floor(Math.random() * 250) + 1;
      var parms = "start=" + start + "&end=" + start + "&format=JSONP";

       //var parms = "title=air bud&format=JSONP"; 
       //var parms = "title=matrix&format=JSONP";

        $(".title").text("");
        $("#genres").text("");
        $("#actors").text("");
        $("#rating").text("");
        $("#story").text("");
        $("#url").text("");
        $("#poster").text("");

        $.ajax({
            data:       parms,
            url:        'http://www.myapifilms.com/imdb/top',
            type:       'get',
            dataType:   'jsonp',
            beforeSend: function () {},
            success:  function (response, textStatus, jqXHR) {
                console.log('Haaaam guuuurl!');
                printMovie(response[0]);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#error").text(textStatus + "; " + errorThrown);
            }
        });
    }


    function printMovie(movie) {
      console.log(movie);
      $('#poster').attr("src", movie.urlPoster);
      $("#movie-title").attr("href", movie.urlIMDB).text(movie.title);
      $('.title').append(movie.title);
      $("#rating").append(movie.rating + ", ");
      $("#story").append(movie.simplePlot + ", ");
      $("#url").append(movie.urlIMDB);

        $.each(movie.genres, function (i, genre) {
            $("#genres").append(genre + ', ');
        });


    }
});

<!-- End document ready -->