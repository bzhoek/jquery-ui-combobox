describe("Drop-down", function() {

	var subject;
	var widget;
	var filled;

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
		subject = $('input[name=drop_down_empty]').dropdown({
			values: ["First choice", "Second choice", "Third choice"]
		});
		widget = subject.dropdown('widget')
		
		filled = $('input[name=drop_down_filled]').dropdown({
			values: ["First choice", "Second choice", "Third choice"],
			selectedValue: "Second choice"
		});
		
  });
	
  it("should have hidden drop-down choices", function() {
    expect(widget.length).toBe(1);
  });

  it("should have three choices", function() {
    expect($('li', widget).length).toBe(3);
  });

  it("should begin with 'First choice'", function() {
    expect($('li:nth-child(1)', widget).text()).toBe('First choice');
  });

  it("should hide drop-down choices on blur", function() {
		subject.focus().blur();
    expect(widget).toBeHidden();
  });

  it("should show drop-down choices on focus", function() {
		subject.focus();
    expect(widget).toBeVisible();
  });

  it("should show drop-down choices on focus", function() {
		subject.focus();
		subject.trigger(keydown('DOWN'));
    expect(widget).toBeVisible();
  });

});

describe("Filled Drop-down from constructor", function() {

	var subject;
	var widget;

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
		subject = $('input[name=drop_down_filled]').dropdown({
			values: ["First choice", "Second choice", "Third choice"],
			selectedValue: "Second choice"
		});
		widget = subject.dropdown('widget')
  });
	
  it("should set valueIndex based on value", function() {
    expect(subject.dropdown("selectedIndex")).toBe(1);
  });

});

describe("Filled Drop-down from value", function() {

	var subject;
	var widget;

  beforeEach(function() {
    loadFixtures('drop_down_fixture.html');
		subject = $('input[name=drop_down_filled]').dropdown({
			values: ["First choice", "Second choice", "Third choice"]
		});
		widget = subject.dropdown('widget')
  });
	
  it("should set valueIndex based on value", function() {
    expect(subject.dropdown("selectedIndex")).toBe(2);
  });

});