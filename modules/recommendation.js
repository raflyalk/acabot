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
            "text": classDescriptions[classNames[i]]
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

  return replyMessage;
}