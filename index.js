"use strict";
exports.__esModule = true;
exports.lookupUser = void 0;
var unparsedKey = "0F3A7B53-9FE1-42FB-B03E-F79A7B1733BF";
var parseKey = function (input) {
    // silly validation
    if (input.length === 36) {
        return input;
    }
    return null;
};
var lookupUser = function (id) {
    return {
        name: "some user",
        id: id
    };
};
exports.lookupUser = lookupUser;
// Not valid since unparsedKey is a string
// const foundUser = lookupUser(unparsedKey);
var theKey = parseKey(unparsedKey);
// Not valid since theKey might be null
// lookupUser(theKey);
if (theKey === null) {
    console.log("theKey is null");
}
else {
    // Now valid because of the explicit null check above
    console.log(exports.lookupUser(theKey));
}
console.log(typeof theKey); // --> string (at runtime)
// UuidKey can also be used inline in lieu of the parseKey method
console.log(exports.lookupUser("CFFBFD8B-1326-4212-8E56-5E27750CC426"));
