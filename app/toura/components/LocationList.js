dojo.provide('toura.components.LocationList');

dojo.require('mulberry._Component');
dojo.require('mulberry.app.URL');
dojo.require('toura.URL');

dojo.declare('toura.components.LocationList', mulberry._Component, {
  templateString : dojo.cache('toura.components', 'LocationList/LocationList.haml'),

  prepareData : function() {
    this.locations = dojo.map(this.node.googleMapPins, function(pin) {
      var loc = dojo.mixin({}, pin);

      loc.directionsUrl = pin.address && mulberry.app.URL.googleMapAddress(pin.address);
      loc.phoneUrl = pin.phoneNumber && mulberry.app.URL.tel(pin.phoneNumber);

      return loc;
    });
  },

  setupConnections : function() {
    dojo.forEach(this.query('a.website'), function(n) {
      this.connect(n, 'click', function(e) {
        e.preventDefault();
        mulberry.app.PhoneGap.browser.url(
          dojo.attr(n, 'href')
        );
      });
    }, this);
  },

  initializeStrings : function() {
    this.i18n_phone = this.getString('PHONE');
    this.i18n_website = this.getString('WEBSITE');
    this.i18n_directions = this.getString('DIRECTIONS');
  }
});
