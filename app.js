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

const client = new line.Client(config);
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text
  });
}

app.listen(3000, function() {
	console.log("listening on port 3000");
});