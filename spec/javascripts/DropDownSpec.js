describe("Drop-down", function() {

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
  });
	
  it("should always load fixture", function() {
    expect($('.drop_down')).toBeVisible();
  });

  it("should have only one drop-down", function() {
    expect($('.drop_down').length).toBe(1);
  });

  it("should have hidden drop-down choices", function() {
		$('.drop_down').dropdown();
    expect($('.drop_down_bla').length).toBe(1);
  });

});