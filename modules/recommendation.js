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
    for(var i = 0; i < relatedClasses.length; i++) {
        for(var j = 0; j < relatedClasses[i].length; j++) {
            if(!classNames.includes(relatedClasses[i][j])) {
                classNames.push(relatedClasses[i][j]);
            }
        }
    }

    var columnNumber = 0;

    if(recommendClasses > 10) {
        columnNumber = 10;
    } else {
        columnNumber = classNames.length;
    }

    var columns = [];

    for(var i = 0; i < columnNumber; i++) {
        var column = {
            "title": classNames[i],
            "text": classDescriptions[classNames[i]],
            "actions": [
                {
                    "type":"message",
                    "label":"Yes",
                    "text":"Show details for class " + classNames[i]
                }
            ]
        }

        columns.push(column);
    }

    replyMessage = {
        "type": "template",
        "altText": "List of recommended classes",
        "template": {
          "type": "carousel",
          "columns": columns
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
              "title": "AI",
              "text": "kelas AI",
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
        ]
    }
  }
  return testMessage;
}

module.exports.recommendClasses = recommendClasses;