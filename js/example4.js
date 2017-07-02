var socialMedia = {
    facebook : 'http://facebook.com/viewsource',
    twitter: 'http://twitter.com/planet',
    flickr: 'http:/flickr.com/planet',
    youtube: 'http:/youtube.com/planet'
};

var social = function(){
    var output = '<ul>',
    myList = document.querySelectorAll('.socialmediaicons');

    for(var key in arguments[0]){
       output += '<li><a href="' + socialMedia[key] + '">' +
       '<img src="img/' + key + '.png" alt="icon for '+ key +'"/></a></li>';
    }
    output += '</ul>';

    for(var i = myList.length -1; i >= 0; i--){
        myList[i].innerHTML = output;
    }


}(socialMedia);
