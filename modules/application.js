var applications = ["Student Exchange", "LPDP"];
var descriptions = ["Foreign exchange programs for undergraduates", "Government-funded scholarship for overseas study"];
var details = ["This program gives you the chance to travel and study abroad for a whole semester.\n\nTo apply:\n1.Take a form from the foreign exchange counter\n2.Fill in the form\n3.Submit the form with a copy of your student ID", "This program fully funds your graduate studies abroad for the next 4 years.\n\nTo apply:\n1.Take a form from the graduate studies counter\n2.Fill in the form\n3.Submit the form with a copy of your student ID and proof of citizenship"];

var showApplications = function() {
    var columns = [];

    for(var i = 0; i < applications.length; i++) {
        var column = {
            "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
            "imageBackgroundColor": "#FFFFFF",
            "title": applications[i],
            "text": descriptions[i],
            "defaultAction": {
                "type":"message",
                "label":"Show details",
                "text":"Show details for application " + applications[i]
            },
            "actions": [
                {
                    "type":"message",
                    "label":"Show details",
                    "text":"Show details for application " + applications[i]
                }
            ]
        }

        columns.push(column);
    }

    var replyMessage = {
        "type": "template",
        "altText": "List of recommended classes",
        "template": {
          "type": "carousel",
          "columns": columns,
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
        }
    };

    return replyMessage;
}

var showDetails = function(applicationName) {
    text = applicationName + " program details:\n";
    for(var i = 0; i < applications.length; i++) {
        if(applications[i].toLowerCase() === applicationName.toLowerCase()) {
            text = text + details[i]
        }
    }

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

module.exports.showApplications = showApplications;
module.exports.showDetails = showDetails;