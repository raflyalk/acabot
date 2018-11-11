// file recommendation.js
const State = require('./state');

// list of classes
var relatedClasses = {
    "AI" : ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    "Jaringan Komputer" : ["Sistem Terdistribusi", "Kriptografi", "Sistem Operasi"],
    "Basis Data" : ["Manajemen Basis Data"]
};

var classDescriptions = {
    "Machine Learning": "Learn how to design and implement programs that implements automatic learning",
    "Natural Language Processing": "Learn how to process natural language into forms that computers can process",
    "Computer Vision": "Learn how to process images and identify objects within",
    "Sistem Terdistribusi": "Learn how to create a distributed system for various purposes",
    "Kriptografi": "Learn how data is encrypted and the various ways to do it",
    "Sistem Operasi": "Learn the fundamentals of how operating system works",
    "Manajemen Basis Data": "Find out the various ways to optimize a database's performance"
}

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
              "title": "this is menu",
              "text": "description",
              "defaultAction": {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://example.com/page/123"
              },
              "actions": [
                  {
                      "type": "postback",
                      "label": "Buy",
                      "data": "action=buy&itemid=111"
                  },
                  {
                      "type": "postback",
                      "label": "Add to cart",
                      "data": "action=add&itemid=111"
                  },
                  {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://example.com/page/111"
                  }
              ]
            },
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
              "imageBackgroundColor": "#000000",
              "title": "this is menu",
              "text": "description",
              "defaultAction": {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://example.com/page/222"
              },
              "actions": [
                  {
                      "type": "postback",
                      "label": "Buy",
                      "data": "action=buy&itemid=222"
                  },
                  {
                      "type": "postback",
                      "label": "Add to cart",
                      "data": "action=add&itemid=222"
                  },
                  {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://example.com/page/222"
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

module.exports.recommendClasses = recommendClasses;