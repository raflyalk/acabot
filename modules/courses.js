const State = require('./state');

var courses = ["AI", "Jaringan Komputer", "Basis Data"];
var details = ["AI credit is 4 sks\n\nThe main studies of this course is Artificial Intelligence\n\nYour lecturer for this class is Dr. Masayu Leylia Khodra", "Jaringan Komputer credit is 3 sks\n\nThis course focuses on studying how computer networks work\n\nYour lecturer for this is Achmad Imam Kistijantoro ST,M.Sc.,Ph.D.", "Basis Data credit is 2 sks\n\nThis course teaches optimization on databases\n\nYour lecturer for this class is Tricya Esterina Widagdo ST,M.Sc."];

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

var showClassDetail = function(classNum) {
    var text = details[classNum - 1];

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage
}

module.exports.displayCourse = displayCourse;
module.exports.showClassDetail = showClassDetail;