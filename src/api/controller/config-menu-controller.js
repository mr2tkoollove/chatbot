/**
 * Created by user on 9/25/17.
 */
const messengerHelper = require('../helpers/messenger-helper');
const config = require('../helpers/config');
const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
let documentClient = new AWS.DynamoDB.DocumentClient();

exports.setStartedText = function (req, res) {
  let {startedText, pageId} = req.body;
  let params = {
    TableName: config.TABLE_PAGE,
    Key: {
      "pageId": pageId
    },
    UpdateExpression: "set getStartedButton = :getStartedButton, modifiedAt = :modifiedAt",
    ExpressionAttributeValues: {
      ":getStartedButton": startedText,
      ":modifiedAt": Date.now()
    },
    ReturnValues: "UPDATED_NEW"
  }

  documentClient.update(params, (err, data) => {
    if(err) console.error(err);
    res.json({
      status: 'succeed'
    });
  })
};

exports.setMainMenu = function (req, res) {
  let {mainMenu, text, pageId} = req.body;
  let menu = setListButtonMainMenu(mainMenu, text);
  let params = {
    TableName: config.TABLE_PAGE,
    Key: {
      "pageId": pageId
    },
    UpdateExpression: "set mainMenu = :mainMenu, modifiedAt = :modifiedAt",
    ExpressionAttributeValues: {
      ":mainMenu": menu,
      ":modifiedAt": Date.now()
    },
    ReturnValues: "UPDATED_NEW"
  }

  documentClient.update(params, (err, data) => {
    if(err) console.error(err);
    res.json({
      status: 'succeed'
    });
  })
};

exports.setPersistentMenu = function (req, res) {
  let {persistentMenu, pageAccessToken} = req.body;
  let menu = setListButtonPersistentMenu(persistentMenu);
  console.log('persistent menu', menu);
  messengerHelper.setMenu(menu, pageAccessToken);
  res.status(200);
};

function setListButtonMainMenu(listButton, text) {
  return {
    "message": {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": text,
          "buttons": listButton
        }
      }
    }
  }
}

function setListButtonPersistentMenu(listButton) {
  return {
    "persistent_menu": [
      {
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions": listButton
      }
    ]
  }
}
