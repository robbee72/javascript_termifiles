// // ES5
// aAsync().then(function() {
//   returnbAsync();
// }).then(function() {
//   returncAsync();
// }).done(function() {
//   finish();
// });
//
// // ES6
// aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);
//
//
// // ES5
API.prototype.get = function(resource) {
  var self = this;
  return new Promise(function(resolve, reject) {
    http.get(self.uri + resource, function(data) {
      resolve(data);
    });
  });
};

// ES6
API.prototype.get = function(resource) {
  return new Promise((resolve, reject) => {
    http.get(this.uri + resource, function(data) {
      resolve(data);
    });
  });
};
