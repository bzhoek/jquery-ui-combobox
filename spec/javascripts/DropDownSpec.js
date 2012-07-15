describe("Drop-down", function() {

	var subject;

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
		subject = $('.drop_down').dropdown({
			values: ["First choice", "Second choice", "Third choice"]
		});
		subject.dropdown = $('.jq_drop_down');
  });
	
  it("should have hidden drop-down choices", function() {
    expect(subject.dropdown.length).toBe(1);
  });

  it("should have three choices", function() {
    expect($('li', subject.dropdown).length).toBe(3);
  });

  it("should begin with 'First choice'", function() {
    expect($('li:nth-child(1)', subject.dropdown).text()).toBe('First choice');
  });

  it("should hide drop-down choices on blur", function() {
		subject.focus().blur();
    expect(subject.dropdown).toBeHidden();
  });

  it("should show drop-down choices on focus", function() {
		subject.focus();
    expect(subject.dropdown).toBeVisible();
  });

});