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

  it("should hide choices on blur", function() {
		subject.focus().blur();
    expect(widget).toBeHidden();
  });

  it("should show choices on focus", function() {
		subject.focus();
    expect(widget).toBeVisible();
  });

  it("should select first choice on first arrow down", function() {
		subject.focus();
		subject.trigger(keydown('DOWN'));
    expect(subject.dropdown("selectedIndex")).toBe(0);
    expect(subject.val()).toBe("First choice");
  });

  it("should stick to last choice on many arrow down", function() {
		subject.focus();
		$(4).times(function(){ subject.trigger(keydown('DOWN')) });
    expect(subject.dropdown("selectedIndex")).toBe(2);
    expect(subject.val()).toBe("Third choice");
  });

  it("should remain unchanged on first arrow up", function() {
		subject.focus();
    expect(subject.dropdown("selectedIndex")).toBe(-1);
		subject.trigger(keydown('UP'));
    expect(subject.dropdown("selectedIndex")).toBe(-1);
    expect(subject.val()).toBe("");
  });

  it("should revert to empty on many arrow up", function() {
		subject.focus();
    $(2).times(function(){ subject.trigger(keydown('DOWN')) });
    expect(subject.dropdown("selectedIndex")).toBe(1);
    expect(subject.val()).toBe("Second choice");
    $(4).times(function(){ subject.trigger(keydown('UP')) });
    expect(subject.dropdown("selectedIndex")).toBe(-1);
    expect(subject.val()).toBe("");
  });

  it("should return to original value on escape", function() {
		subject.focus();
    subject.trigger(keydown('DOWN'));
    expect(subject.dropdown("selectedIndex")).toBe(0);
    expect(subject.val()).toBe("First choice");
    subject.trigger(keydown('ESCAPE'));
    expect(subject.dropdown("selectedIndex")).toBe(-1);
    expect(subject.val()).toBe("");
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