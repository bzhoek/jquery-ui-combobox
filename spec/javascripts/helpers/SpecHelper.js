function keydown(name) {
	var e = jQuery.Event("keydown");
	e.keyCode = $.ui.keyCode[name];
	return e;
}

beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong && 
             player.isPlaying;
    }
  });
});
