/**
 * Created by user on 9/25/17.
 */
'use-trict';

const express = require('express');
const config = require('../helpers/config');
const AWS = require("aws-sdk");
const fetch = require('node-fetch');
AWS.config.loadFromPath('./config.json');

let documentClient = new AWS.DynamoDB.DocumentClient();

exports.handleResponse = async function (req, res) {
  let {store, code} = req.query;
  if (!code) {
    res.redirect(`${config.FB_REDIRECT_URI}/?store=${JSON.stringify(store)}`);
  }
  else {
    let uri = "https://graph.facebook.com/v2.10/oauth/access_token?"
      + "client_id=" + config.FB_CLIENT_ID
      + "&redirect_uri=" + config.FB_REDIRECT_URI + "/api/account/HandleResponse?store=" + store
      + "&client_secret=" + config.FB_SECRET_KEY
      + "&code=" + code;
    let response = await getAccessToken(store, uri);
    let info = await getUserInfo(response.access_token);
    let params = {
      TableName: config.TABLE_ACCOUNT,
      Item: {
        "fbUserId": info.id,
        "name": info.name,
        "accessToken": response.access_token,
        "pages": await getListPage(response.access_token)
      }
    };
    await documentClient.put(params, (err, data) => {
      if (err) {
        console.log(`save failed ${err}`);
      }
    });
    await updateStoreAccount(info, store, response.access_token);
    res.redirect(`${config.FB_REDIRECT_URI}/?store=${store}`);
  }
};

//get info account
exports.getInfoAccount = function (req, res) {
  let body = req.body;
  let params = {
    TableName: config.TABLE_ACCOUNT,
    Key: {
      "fbUserId": body.fbUserId
    }
  };
  documentClient.get(params, async (err, data) => {
    let listPage = await getListPage(data.Item.accessToken);
    res.json(JSON.stringify(listPage.data));
  });
}

function getListPage(access_token) {
  let uri = "https://graph.facebook.com/v2.10//me/accounts/?access_token=" + access_token;
  return fetch(uri, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }).then(res => {
    return res.json();
  });
}

function getAccessToken(store, code) {
  let uri = "https://graph.facebook.com/v2.10/oauth/access_token?"
    + "client_id=" + config.FB_CLIENT_ID
    + "&redirect_uri=" + config.FB_REDIRECT_URI + "/api/account/HandleResponse?store=" + store
    + "&client_secret=" + config.FB_SECRET_KEY
    + "&code=" + code;
  return fetch(uri, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(res => {
      return res.json()
    }
  );
}

// update info account when logged in
function updateStoreAccount(userInfo, store, fbUserAccessToken) {
  let params = {
    TableName: config.TABLE_STORE,
    Key: {
      "storeAlias": store,
    },
    UpdateExpression: "set currentAccountInfo = :currentAccountInfo, modifiedAt = :modifiedAt, fbUserAccessToken = :fbUserAccessToken",
    ExpressionAttributeValues: {
      ":currentAccountInfo": userInfo,
      ":modifiedAt": Date.now(),
      ":fbUserAccessToken": fbUserAccessToken
    },
    ReturnValues: "UPDATED_NEW"
  };
  documentClient.update(params, (err, data) => {
    if (err) {
      console.log('failed', err);
    }
  });
}

function getUserInfo(accessToken) {
  let uri = "https://graph.facebook.com/me?access_token=" + accessToken;
  return fetch(uri, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(res => {
    return res.json()
  }).catch(() => {
    return err;
  });
}
