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

// command : show topics 1
var showMaterialDetail = function() {
	var text = "Here is the topics of IF3170 Intelegensi Buatan : " +
				"\n 1. Overview of AI problems. Examples of succesfull recent AI applications" +
				"\n 2. Inteligence behavior and how to test the intteligence using Turing Test" +
				"\n 3. Problems Solving by searching";

	var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

// comand : show material recommendations 1
var showMaterialRecommendation = function() {
	var replyMessage = {
	  "type": "template",
	  "altText": "this is a carousel template",
	  "template": {
	    "type": "carousel",
	    "actions": [],
	    "columns": [
	      {
	        "title": "Sekolah Teknik Elektro dan Informatika",
	        "text": "Web",
	        "actions": [
	          {
	            "type": "uri",
	            "label": "Open",
	            "uri": "https://google.com"
	          }
	        ]
	      },
	      {
	        "title": "Inference in artificial intelligence",
	        "text": "Video",
	        "actions": [
	          {
	            "type": "uri",
	            "label": "Open",
	            "uri": "https://google.com"
	          }
	        ]
	      }
	    ]
	  }
	}

	return replyMessage;
}

module.exports.showMaterials = showMaterials;
module.exports.showClassTopics = showMaterialDetail;
module.exports.showMaterialRecommendation = showMaterialRecommendation;