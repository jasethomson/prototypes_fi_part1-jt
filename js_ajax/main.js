//Create GLOBAL variable below here on line 2



$(document).ready(initializeApp);

var global_result = null;
function initializeApp(){
    $('button').click(getData);
}

function getData(){
    console.log('1) getData called from button click');
    var ajaxConfig = {
        dataType: 'json',
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
        success: function(result) {
            console.log('2) AJAX Success function called, with the following result:', result);
            global_result = result;
            var firstMovieInfo = global_result.feed.entry[0]["im:image"][2].label;
            var accessTenMovies = global_result.feed.entry;
            var lengthOfTopTenMovies = accessTenMovies.length;

            var numOfTimesLoop = 0;
            while(numOfTimesLoop< lengthOfTopTenMovies){
                var thirdImage = accessTenMovies[numOfTimesLoop]["im:image"][2].label;
                var divContainer = $("<div>", {
                    class: "container",
                    css: {
                        'display': "inline-block",
                        'width': "350px"
                    }
                });
                var newImageTag = $("<img>", {
                    src: thirdImage
                });
                var movieTitle = accessTenMovies[numOfTimesLoop]["im:name"].label;
                var movieDirector = accessTenMovies[numOfTimesLoop]["im:artist"].label;
                var movieTitleTag = $("<div>", {
                    text: movieTitle
                });
                var movieDirectorTag = $("<div>", {
                    text: movieDirector
                });

                $(divContainer).append(newImageTag, movieDirectorTag, "<br>", movieTitleTag, "<br>");
                $("#main").append(divContainer);
                numOfTimesLoop++;
            }
        }
    }

    console.log('3) Making AJAX request');
    $.ajax(ajaxConfig);

    console.log('4) End of getData');
}
