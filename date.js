//jshint esversion: 6

module.exports.getDate = function () {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US",options);
}
    
module.exports.getDay = function () {
    var today = new Date();
    var options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US",options);
}

console.log(module.exports);