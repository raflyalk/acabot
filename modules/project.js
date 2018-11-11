var projects = ["Search Engine Optimization", "Artificial Neural Networks"];
var descriptions = ["Speed optimizations for search engines", "Improving scalability of ANNs"];
var details = ["Scope: Optimizing a search engine for local file search purposes.\n\nTime: 2 Months(February - April)\n\nQualifications:\n1.Mastery over C/C++\n2.Knowledge on how filesystems work\n\nContact Person: Jimmy (081234567890)", "Scope: Increasing scalability for an existing ANN. Mainly for exploratory research, no precise target defined yet.\n\nTime: Undefined, possibly 6 months(January - June)\n\nQualifications:\n1.Mastery over Python\n2.Knowledge on Neural Networks\n\nContact Person: Jimmy (081234567890)"];

var showProjects = function() {
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

var showDetails = function(projectName) {
    var text = "Title: " + projectName + "\n\n";

    for(var i = 0; i < projects.length; i++) {
        if(projects[i].toLowerCase() === projectName.toLowerCase()) {
            text = text + details[i];
        }
    }

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

module.exports.showProjects = showProjects;
module.exports.showDetails = showDetails;