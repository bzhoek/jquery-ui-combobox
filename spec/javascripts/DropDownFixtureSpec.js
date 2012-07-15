describe("Drop-down fixture", function() {

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
  });
	
  it("should always load fixture", function() {
    expect($('.drop_down')).toBeVisible();
  });

  it("should have only one drop-down", function() {
    expect($('.drop_down').length).toBe(2);
  });

});