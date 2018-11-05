// file app.js

const express = require('express');
const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: 'x/t0izSXG36JYM6i4LRK5lFEhJcUErHXMZ8/vXepyl5/oGFaYTft0dXM9yZrFmqkfVp8ifumLfUw5I6fZeXjy8CJttsFwwL/cDMXaJbvBqCOI3J9a02gKNymGWPYqkxe28B/8ywtKU+axqmUZYJKiwdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'b59f7ec80687b600e55d0be711128ffd'
};

const app = express();
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

var taskList = ["Tubes JarKom - 30/10/2018", "Tugas MPPL - 31/10/2018"];

const client = new line.Client(config);
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  var message = event.message.text;
  var replyMessage = {
  	type: "text",
  	text: "This is default text"
  };

  // daily notification functionality
  if (message.toLowerCase() == "input task") {
  	replyMessage['text'] = "Hello James, please input your task,\nPlease input in this following format :\n[TASK NAME - DD/MM/YY]";
  }

  if (message.toLowerCase() == "display task") {
  	let replyText = "Hello James, Here is the list of your task";

 	for (let i = 0; i < task.length; i++) {
 		replyText += "\n${i}. " + task[i];
 	}
  }

  if (message[0] == '[') {
  	let task = message.slice(1, message.length - 1);
  	let n = task.IndexOf('-') - 1;

  	let taskName = message.slice(1, n);

  	// add to list of task
  	taskList.push(task);

  	replyMessage = {
	  type: "template",
	  altText: "this is a confirm template",
	  template: {
	    type: "confirm",
	    actions: [
	      {
	        type: "message",
	        label: "Yes",
	        text: "Yes"
	      },
	      {
	        type: "message",
	        label: "No",
	        text: "No"
	      }
	    ],
	    text: "Are you sure you want to input \"${taskName}\" to task list?"
	  }
	};
  }

  if (message == "Yes") {
  	let task = taskList[taskList.length - 1];

  	replyMessage['text'] = "\"${task}\" is successfully added to your task";
  }

  return client.replyMessage(event.replyToken, replyMessage);
}

app.listen(process.env.PORT || 5000, function() {
	console.log("listening on port");
});