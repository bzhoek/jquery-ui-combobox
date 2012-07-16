function keydown(name) {
	var e = jQuery.Event("keydown");
	e.which = e.keyCode = $.ui.keyCode[name];
	return e;
}

jQuery.fn.times = function(f) {
	for(i = 0; i < this[0]; i++) {
		f(i);
	}
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
