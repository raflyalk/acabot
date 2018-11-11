// file recommendation.js
const State = require('./state');

// list of classes
var relatedClasses = {
    "AI" : ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    "Jaringan Komputer" : ["Sistem Terdistribusi", "Kriptografi", "Sistem Operasi"],
    "Basis Data" : ["Manajemen Basis Data"]
};

var classDescriptions = {
    "Machine Learning": "Learn about programs that implements automatic learning",
    "Natural Language Processing": "Learn how to process natural language",
    "Computer Vision": "Learn how to process images",
    "Sistem Terdistribusi": "Learn how to create a distributed system",
    "Kriptografi": "Learn how data encryption works",
    "Sistem Operasi": "Learn how operating systems work",
    "Manajemen Basis Data": "Learn how to optimize a DB's performance"
}

var syllabus = [["Machine Learning", "Introduction", "Fundamentals of AI", "Common Algorithms"], ["Natural Language Processing", "Introduction", "Basic Techniques"], ["Computer Vision", "Introduction", "Image basics", "Image processing with Python"], ["Sistem Terdistribusi", "Introduction", "Distributed System Architectures", "Applications of distributed systems"], ["Kriptografi", "Introduction", "History of cryptography", "Basic encryption techniques"], ["Sistem Operasi", "Introduction", "Computer architecture", "Interaction between OS and hardware"], ["Manajemen Basis Data", "Introduction", "DBMS Basics", "I/O Operations"]];

var recommendClasses = function() {
    console.log("Creating carousel");
    classNames = []
    var classes = Object.keys(relatedClasses);
    for(var i = 0; i < classes.length; i++) {
        for(var j = 0; j < relatedClasses[classes[i]].length; j++) {
            classNames.push(relatedClasses[classes[i]][j]);
        }
    }

    var columnNumber = 0;

    if(classNames.length > 10) {
        columnNumber = 10;
    } else {
        columnNumber = classNames.length;
    }

    var columns = [];

    for(var i = 0; i < columnNumber; i++) {
        var column = {
            "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
            "imageBackgroundColor": "#FFFFFF",
            "title": classNames[i],
            "text": classDescriptions[classNames[i]],
            "defaultAction": {
                "type":"message",
                "label":"Show details",
                "text":"Show details for class " + classNames[i]
            },
            "actions": [
                {
                    "type":"message",
                    "label":"Show details",
                    "text":"Show details for class " + classNames[i]
                }
            ]
        }

        columns.push(column);
    }

    console.log("Number of columns: " + columns.length);

    replyMessage = {
        "type": "template",
        "altText": "List of recommended classes",
        "template": {
          "type": "carousel",
          "columns": columns,
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
        }
  };
  console.log("Returning carousel");

  var testMessage = {
    "type": "template",
    "altText": "List of recommended classes",
    "template": {
        "type": "carousel",
        "columns": [
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
              "imageBackgroundColor": "#FFFFFF",
              "title": "Machine Learning",
              "text": "Machine LEarning Basics",
              "defaultAction": {
                  "type": "message",
                  "label": "View detail",
                  "text": "Show details for class Machine Learning"
              },
              "actions": [
                  {
                      "type": "message",
                      "label": "View detail",
                      "text": "Show details for class Machine Learning"
                  }
              ]
            },
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
              "imageBackgroundColor": "#FFFFFF",
              "title": "Machine Learning",
              "text": "Machine Learning",
              "defaultAction": {
                  "type": "message",
                  "label": "View detail",
                  "text": "Show details for class Machine Learning"
              },
              "actions": [
                  {
                      "type": "message",
                      "label": "View detail",
                      "text": "Show details for class Machine Learning"
                  }
              ]
            }
        ],
        "imageAspectRatio": "rectangle",
        "imageSize": "cover"
    }
  }
  return replyMessage;
}

var showDetails = function(className) {
    var text = "Syllabus for " + className + "\n";
    for(var i = 0; i < syllabus.length; i++) {
        if(syllabus[i][0].toLowerCase() === className.toLowerCase()) {
            for(var j = 1; j < syllabus[i].length; j++) {
                text = text + j + ". " + syllabus[i][j] + "\n";
            }
        }
    }

    text = text + "This class is recommended because you took Probability and Statistics";

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

module.exports.recommendClasses = recommendClasses;
module.exports.showDetails = showDetails;