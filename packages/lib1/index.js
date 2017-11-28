f2 = require("tom-lib2");
module.exports = function(a) {
  console.log("lib 1 mod 6", a);
  console.log("this is f2 called inside f1", f2());
};
