describe("DropDown", function() {

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
  });
	
  it("should always load fixture", function() {
    expect($('.drop_down')).toBeVisible();
  });

});