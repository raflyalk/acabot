var projects = ["Search Engine Optimization", "Artificial Neural Networks"];
var descriptions = ["Speed optimizations for search engines", "Improving scalability of ANNs"];

var showProjects = function() {

    console.log("Creating list of projects");
    var columns = [];

    for(var i = 0; i < projects.length; i++) {
        var column = {
            "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
            "imageBackgroundColor": "#FFFFFF",
            "title": projects[i],
            "text": descriptions[i],
            "defaultAction": {
                "type":"message",
                "label":"Show details",
                "text":"Show details for project " + projects[i]
            },
            "actions": [
                {
                    "type":"message",
                    "label":"Show details",
                    "text":"Show details for project " + projects[i]
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

module.exports.showProjects = showProjects;