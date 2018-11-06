// file app.js

// from node modules
const express = require('express');
const line = require('@line/bot-sdk');

// from modules
const task = require('./modules/task')

const port = process.env.PORT || 5000;

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

var State = {
	STEADY: 0,
	INPUT_TASK: 1
}

var currentState = State.STEADY;

const client = new line.Client(config);
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  var message = event.message.text;
  var replyMessage = {
  	type: "text",
  	text: "This is default reply text"
  };

  // ================ TASK INPUT AND NOTIFICATION ==================== //
  if (message.toLowerCase() === "display task") {
  	replyMessage = task.displayTask();
  } 

  if (message.toLowerCase() === "input task") {
  	currentState = State.INPUT_TASK;
  }

  if (currentState === State.INPUT_TASK) {
  	replyMessage = task.handleInputTask(message, currentState);
  }

  return client.replyMessage(event.replyToken, replyMessage);
}

app.listen(port, function() {
	console.log("listening on port");
});