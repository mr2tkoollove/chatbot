/**
 * Created by user on 9/25/17.
 */
/**
 * Created by user on 9/14/17.
 */
'use strict';
const express = require('express');
const config = require('../helpers/config');

const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
let documentClient = new AWS.DynamoDB.DocumentClient();

const fetch = require('node-fetch');

exports.getStoreInfo = (req, res) => {
  let alias = req.query.query;
  var params = {
    TableName: config.TABLE_STORE,
    Key: {
      "storeAlias": alias,
    }
  };
  let body = ({
    store: null,
    status: 0
  });
  documentClient.get(params, async function (err, data) {
    if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null,
        2));
    } else {
      if (!data) {
        res.json(JSON.stringify(body));
      }
      let item = data.Item;
      let isLoggedIn = await validateAccessToken(item.storeAlias, item.accessToken);
      if (isLoggedIn && item.currentAccountInfo) {
        body.status = 1;
        body.store = storeResponse(item);
      }
      res.json(body);
    }
  });
}

function storeResponse(store) {
  let storeClone = {};
  storeClone.storeAlias = store.storeAlias;
  storeClone.status = store.status;
  if(store.currentPageInfo) {
    storeClone.currentPageInfo = store.currentPageInfo;
    storeClone.currentPageInfo.pageAccessToken = null;
  }
  storeClone.currentAccountInfo = store.currentAccountInfo;
  return storeClone;
}

exports.getCode = (req, res) => {
  let store = req.query.query;
  let scopes = "public_profile,manage_pages,publish_pages,pages_messaging,pages_messaging_subscriptions,email";
  let authURL = "https://www.facebook.com/v2.10/dialog/oauth?client_id="
    + config.FB_CLIENT_ID
    + "&redirect_uri="
    + config.FB_REDIRECT_URI + "/api/account/HandleResponse?store=" + store
    + "&response_type=code"
    + "&display=page"
    + "&scope=" + scopes;
  res.json(JSON.stringify({
    url: authURL
  }));
};


function validateAccessToken(domain, accessToken) {
  let uri = `https://${domain}/admin/store.json`;
  return fetch(uri, {
    method: 'GET',
    headers: {'X-Bizweb-Access-Token': accessToken}
  })
    .then(res => {
      if (res.status === 200) return true;
      else return false;
    }).catch(() => {
      return false
    });
}
