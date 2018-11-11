const State = require('./state');

var courses = ["AI", "Jaringan Komputer", "Basis Data"];

var displayCourse = function() {
    var text = "Hi, here are the courses you've taken this semester\n";

    for(var i = 0; i < courses.length; i++) {
        text = text + (i + 1) + ". " + courses[i] + "\n";
    }

    text = text + "Type a number to view the class' details";

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage
}

module.exports.displayCourse = displayCourse;