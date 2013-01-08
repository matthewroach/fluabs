var fixture;

beforeEach(function () {
  loadFixtures("fluabs.html");
  fixture = $('#tabs');
  fixture.fluabs();
});

describe("fluabs", function() {

  afterEach(function () {
    $("#tabs").remove();
  });


  it("to be defined", function() {

    expect( fixture ).toBeDefined();

  });


  it("tab one to be shown and others to be hidden", function() {

    expect( $('[data-tab="#one"]') ).toBe( ':visible' );

    expect( $('[data-tab="#two"]') ).not.toBe( ':visible' );

    expect( $('[data-tab="#three"]') ).not.toBe( ':visible' );

  });

});

describe('fluabs events', function() {

  afterEach(function () {
    $("#tabs").remove();
  });

  it("click tab", function() {

    var spyEvent = spyOnEvent('#tabs li a', 'click' );

    $('#tabs li a').click();
    expect( 'click' ).toHaveBeenTriggeredOn( '#tabs li a' );
    expect( spyEvent ).toHaveBeenTriggered();

  });

  it("click tab 2 - hide all tabs except tab 2", function() {

    var spyEvent = spyOnEvent('#tabs li a[href=#two]', 'click');

    $('#tabs li a[href=#two]').click();
    expect( 'click' ).toHaveBeenTriggeredOn( '#tabs li a[href=#two]' );
    expect( spyEvent ).toHaveBeenTriggered();

    expect( $('[data-tab="#two"]') ).toBe( ':visible' );
    expect( $('#tabs li a[href=#two]') ).toHaveClass( 'current' );

    expect( $('[data-tab="#one"]') ).not.toBe( ':visible' );
    expect( $('[data-tab="#three"]') ).not.toBe( ':visible' );

  });

  it("click tab 2 - tab 2 to have class current", function() {

    var spyEvent = spyOnEvent('#tabs li a[href=#two]', 'click');

    $('#tabs li a[href=#two]').click();

    expect( $('#tabs li a[href=#two]') ).toHaveClass( 'current' );


  });

});
