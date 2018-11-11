var courses = ["AI", "Jaringan Komputer", "Basis Data"];

var showMaterials = function() {
    var text = "Here is a list of taken courses:\n";

    for(var i = 0; i < courses.length; i++) {
        text = text + (i + 1) + ". " + courses[i] + "\n";
    }

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

module.exports.showMaterials = showMaterials;