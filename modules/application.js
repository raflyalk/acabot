var showApplications = function() {
    applications = ["Student Exchange", "LPDP"];
    descriptions = ["Foreign exchange programs for undergraduates", "Government-funded scholarship for overseas study"];
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

module.exports.showApplications = showApplications;