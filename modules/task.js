// file task.js
const State = require('./state');

// list of task
var taskList = ["Tubes JarKom - 30/10/2018", "Tugas MPPL - 31/10/2018"];

var displayTask = function() {
	var replyText = "Hello James, Here is the list of your task";

 	for (let i = 0; i < taskList.length; i++) {
 		replyText += "\n" + (i+1).toString() + ". " + taskList[i];
 	}

 	var replyMessage = {
 		type: "text",
 		text: replyText
 	};

 	return replyMessage;
}

var inputTask = function(message) {
	var task = message.slice(1, message.length - 1);
  	var n = message.indexOf('-') - 1;

  	var taskName = message.slice(1, n);

  	taskList.push(task);

  	replyMessage = {
  		"type": "template",
  		"altText": "this is a confirm template",
  		"template": {
    		"type": "confirm",
    		"actions": [
      		{
        		"type": "message",
        		"label": "Yes",
        		"text": "Yes"
      		},
      		{
        		"type": "message",
        		"label": "No",
        		"text": "No"
      		}
    		],
    		"text": "Are you sure you want to input \"" + taskName + "\" to task list?"
  		}
	};

	return replyMessage;
}

var confirmTask = function(message, currentState) {
	if (message === "Yes") {
		var task = taskList[taskList.length - 1];
  		var n = message.indexOf('-') - 1;

  		var taskName = task.slice(0, n);

  		replyMessage = {
  			type: "text",
  			text: "\"" + taskName + "\" is successfully added to your task"
  		}
	} else {
		var task = taskList[taskList.length - 1];
  		var n = message.indexOf('-') - 1;

  		var taskName = task.slice(0, n);

  		// delete from list
  		taskList.splice(-1,1);

  		replyMessage = {
  			type: "text",
  			text: "\"" + taskName + "\" is successfully removed from your task"
  		}
	}

	// STEADY STATE
	currentState['status'] = State.STEADY;

	return replyMessage;
}

var handleInputTask = function(message, currentState) {
	var replyMessage = {}

	if (message.toLowerCase() === 'input task') {
		replyMessage = {
			type: "text",
			text: "Hello James, please input your task,\nPlease input in this following format :\n[TASK NAME - DD/MM/YY]"
		}
	} else if (message[0] === '[') {
		replyMessage = inputTask(message);
	} else {
		replyMessage = confirmTask(message, currentState);
	}

	return replyMessage;
}

module.exports.handleInputTask = handleInputTask;
module.exports.displayTask = displayTask;