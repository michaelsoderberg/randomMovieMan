$(document).ready(function () {

    get250TopTitles();

    function get250TopTitles() {
      var start = Math.floor(Math.random() * 249) + 1;
        //var parms = "title=" + $("#textBox").val() + "&format=JSONP";
       // var parms = "?title=air%bud&format=JSONP";

        $.ajax({
            url: 'http://www.myapifilms.com/imdb/top',
            type: 'GET',
            data: {
                start: start,
                end: start+1,
                filter: "M",
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
        //var parms = "title=" + $("#textBox").val() + "&format=JSONP";
        var parms = "?title=air%bud&format=JSONP";

        $("#title").text("");
        $("#genres").text("");
        $("#actors").text("");
        $("#rating").text("");
        $("#url").text("");

        $.ajax({
            data: parms,
            url: 'http://www.myapifilms.com/imdb',
            type: 'GET',
            data: {
                title: "mvp",
                lang: "en-us",
                filter: "M",
                format: "JSONP"
            },
            dataType: 'jsonp',
            success: function (response, textStatus, jqXHR) {
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

        $("#movie-title").attr("href", movie.urlIMDB).text(movie.title);
        $("#rating").append(movie.rating + ", ");

        $.each(movie.genres, function (i, genre) {
            $("#genres").append(genre + ', ');
        });

        $.each(movie.actors, function (i, actor) {
            $("#actors").append(actor.actorName + " - " + actor.actorId + ", ");
        });
    }
});

<!-- End document ready -->