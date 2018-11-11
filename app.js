// file app.js

// from node modules
const express = require('express');
const line = require('@line/bot-sdk');

// from modules
const State = require('./modules/state');
const task = require('./modules/task');
const recommendation = require('./modules/recommendation');
const course = require('./modules/courses.js');
const application = require('./modules/application.js');
const material = require('./modules/material.js');
const faculty = require('./modules/faculty.js');
const project = require('./modules/project.js');

const port = process.env.PORT || 5000;

const config = {
  channelAccessToken: '0hMjGmhhCiTd2xsfq136cabl4coS0AMwtDuNtyIShdQTB0SoPyLHn1vk9iEuaRPJMNFXSIDSahRy4FdxIshwr7DrjisG4d5ftdlbOc9HH9I3DTUktyK3jb4lSlko10uskqmT/Nl3WayC1o66DBCe1wdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'f0b8010d17c8c04c4a6f35850b4dae2a'
};

const app = express();
app.set('port', (process.env.PORT || 5000));
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

// create object so it can pass by reference
var currentState = {
	status: State.STEADY
};

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
  if(message === "1" || message === "2" || message === "3") {
    replymessage = course.showClassDetail(message);
  }

  if (message.toLowerCase() === "display task") {
  	replyMessage = task.displayTask();
  } 

  if (message.toLowerCase() === "input task") {
  	currentState['status'] = State.INPUT_TASK;
  }

  if (currentState['status'] === State.INPUT_TASK) {
  	replyMessage = task.handleInputTask(message, currentState);
  }

  if(message.toLowerCase() === "show class recommendation") {
    replyMessage = recommendation.recommendClasses();
  }

  if(message.toLowerCase().substring(0, 16) === "show details for") {
    var detailType = message.toLowerCase().substring(17);

    if(detailType.substring(0, 5) === "class") {
      replyMessage = recommendation.showDetails(detailType.substring(6));
    }
  }

  if(message.toLowerCase() === "display course") {
    replyMessage = course.displayCourse();
  }

  if(message.toLowerCase() === "show available applications") {
    replyMessage = application.showApplications()
  }

  if(message.toLowerCase() === "course material recommendation") {
    replyMessage = material.showMaterials();
  }

  if(message.toLowerCase() === "show me list of stei faculty members") {
    replyMessage = faculty.showFaculty();
  }

  if(message.toLowerCase() === "display project recommendations") {
    replyMessage = project.showProjects();
  }

  // ================================================================ //

  return client.replyMessage(event.replyToken, replyMessage);
}

app.listen(port, function() {
	console.log('Node app is running on port', app.get('port'));
});