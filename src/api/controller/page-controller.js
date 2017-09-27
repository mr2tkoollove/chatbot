/**
 * Created by user on 9/25/17.
 */
/**
 * Created by user on 9/20/17.
 */
const express = require('express');
const config = require('../helpers/config');

const templateHelper = require('../helpers/template-helper');
const messengerHelper = require('../helpers/messenger-helper');
const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
let documentClient = new AWS.DynamoDB.DocumentClient();

const fetch = require('node-fetch');

// api/page
//create a page of store
exports.createPage = async (req, res) => {
  let {page, store} = req.body;
  let params = {
    TableName: config.TABLE_PAGE,
    Item: {
      pageId: page.id,
      bizwebAccessToken: store.accessToken,
      pageAccessToken: page.access_token,
      name: page.name,
      storeAlias: store.storeAlias,
      persistentMenu: templateHelper.defaultPersistentMenu(),
      getStartedButton: templateHelper.defaultGetStartedButton(),
      mainMenu: templateHelper.defaultMainMenu(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      status: 1
    }
  }
  //set default config
  await setDefaultConfig(page.access_token);
  await documentClient.put(params, (err, data) => {
    if(err) {
      console.error(err);
    }
  });
  await updateStore(store.storeAlias, page);
  res.json(params.Item);
};

exports.getPageById = (req, res) => {
  let pageId = req.params.id;
  let params = {
    TableName:config.TABLE_PAGE,
    Key: {
      "pageId": pageId
    }
  }

  documentClient.get(params, (err, data) => {
    if(err) {
      console.error(err);
    }
    else {
      res.json(pageResponse(data.Item));
    }
  })
}

function pageResponse(page) {
  let clonePage = page;
  clonePage.pageAccessToken = null;
  clonePage.bizwebAccessToken = null;
  return clonePage;
}

// api/page/clearCurrentPage
exports.clearCurrentPage = async (req, res) => {

  await clearDefaultConfig(req.body.page.pageAccessToken);

  let store = req.body.page.storeAlias;
  let params = {
    TableName: config.TABLE_STORE,
    Key: {
      "storeAlias": store,
    },
    UpdateExpression: "remove currentPageInfo,currentAccountInfo,fbUserAccessToken",
    ReturnValues: "UPDATED_NEW"
  }
  await documentClient.update(params, (err, data) => {
    if(err) {
      console.error(err)
    } else {
      console.log('data', data);
    }
  });
  res.json({
    status: 'Succeeded'
  })
};

async function setDefaultConfig(accessToken) {
  let startedButton = {
    "get_started":{
      "payload":"GET_STARTED_PAYLOAD"
    }
  }
  //set webhook
  await messengerHelper.setWebhook(accessToken);
  // turn on started button
  await messengerHelper.setMenu(startedButton, accessToken);
  // set default persistent menu
  await messengerHelper.setMenu(templateHelper.defaultPersistentMenu(), accessToken);
}

function clearDefaultConfig(pageAccessToken){
  messengerHelper.removeWebhook(pageAccessToken);
  messengerHelper.removePersistentMenu(pageAccessToken);
}

function updateStore(store, page) {
  let params = {
    TableName: config.TABLE_STORE,
    Key: {
      storeAlias: store,
    },
    UpdateExpression: "set currentPageInfo = :currentPageInfo, modifiedAt = :modifiedAt",
    ExpressionAttributeValues: {
      ":currentPageInfo": {
        pageId: page.id,
        pageAccessToken: page.access_token,
        name: page.name
      },
      ":modifiedAt": Date.now(),
    },
    ReturnValues: "UPDATED_NEW"
  }

  documentClient.update(params, (err, data) => {
    if(err) {
      console.error('err updated', err.message);
    }
  });
}
