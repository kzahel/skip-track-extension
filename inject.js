window.addEventListener("message", function(evt) {
    if (evt.data[0] && evt.data[0].type == 'from-content-script') {
//    if (evt.data.type == 'from-content-script') {




	  
/*
	  var goodframe = null;

	  for (var i=0; i<window.frames.length; i++) {
	      console.log('frame',window.frames[i]);
	      if (window.frames[i].location.origin) {
		  goodframe = window.frames[i]
		  break;
	      }


//some shit
// var fr = goodframe;
//fr.require('$api/models', function(p) { window.kmodels = p })
//kmodels.player.load(['playing'].done( function(foo) { console.log(foo) } )


	  }
*/
	  var r = new Spotify.Bridge.Responder();
	  r.trigger('player_skip_to_next', {args:['main']});

	  // if want just playpause
	  //var r = new Spotify.Bridge.Responder();
	  //r.trigger('player_play_toggle');
    }

});
