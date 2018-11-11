var faculties = ["Dr. Dessi Puji Lestari", "Ir. Mary Handoko Wijoyo, M.Sc", "Ir. Dwi Hendratmo W., M.Sc., Ph.D.", "Ir. Kridanto Surendro, M.Sc., Ph.D.", "Dra. Harlili M.Sc."];

var showFaculty = function() {
    var text = "Daftar Dosen\nSekolah Teknik Elektro dan Informatika:\n";

    for(var i = 0; i < faculties.length; i++) {
        text = text + (i + 1) + ". " + faculties[i] + "\n";
    }

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

// command : show email 1
var showEmail = function() {
	var replyMessage = {
  		"type": "text",
  		"text": "Dr. Dessi Puji Lestari's Contacts\n------------------------------------------\nEmail 1 : dessi@informatika.org\nEmail 2 : dessi@gmail.com"
	};

	return replyMessage;
}

// command consult 5
var showConsult = function() {
	var replyMessage = {
	  "type": "template",
	  "altText": "this is a carousel template",
	  "template": {
	    "type": "carousel",
	    "actions": [],
	    "columns": [
	      {
	        "thumbnailImageUrl": "https://arsip.itb.ac.id/img/loader.php?url=131414805110208100225.gif",
	        "title": "Dra. Harlili M.Sc.",
	        "text": "Do you wish to consult?",
	        "actions": [
	          {
	            "type": "message",
	            "label": "Yes",
	            "text": "consult yes"
	          },
	          {
	            "type": "message",
	            "label": "No",
	            "text": "consult no"
	          }
	        ]
	      }
	    ]
	  }
	}

	return replyMessage;
}

// command consult yes
var askConsult = function() {
	var replyMessage = {
		"type": "text",
		"text": "Please write the message that you wish to deliver to Harlili M.Sc."
	};

	return replyMessage;
}

// after sending the message
var showConfirmConsult = function() {
	var replyMessage = {
	  "type": "template",
	  "altText": "this is a confirm template",
	  "template": {
	    "type": "confirm",
	    "actions": [
	      {
	        "type": "message",
	        "label": "Yes",
	        "text": "consult message yes"
	      },
	      {
	        "type": "message",
	        "label": "No",
	        "text": "consult message no"
	      }
	    ],
	    "text": "Are you sure to send the message?"
  		}
	};

	return replyMessage;
}

// command : confirm message yes
var confirmMessage = function() {
	var replyMessage = {
		"type": "text",
		"text": "Ok message has been sent to Ms. Harlili"
	}

	return replyMessage;
}


module.exports.showFaculty = showFaculty;
module.exports.showEmail = showEmail;
module.exports.showConsult = showConsult;
module.exports.askConsult = askConsult;
module.exports.showConfirmConsult = showConfirmConsult;
module.exports.confirmMessage = confirmMessage;