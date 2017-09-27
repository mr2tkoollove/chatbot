/**
 * Created by user on 9/25/17.
 */
const config = require('../helpers/config');
const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
let documentClient = new AWS.DynamoDB.DocumentClient();

const fetch = require('node-fetch');

exports.getAuth = async (req, res) => {
  let scopes = 'read_products,read_content,read_customers,read_orders,write_orders';
  const {store, hmac, code, timestamp} = req.query;
  console.log('query', JSON.stringify(req.query));
  if (store && !code) {
    let params = {
      TableName: config.TABLE_STORE,
      Key: {
        "storeAlias": store,
      }
    };
    documentClient.get(params, (err, data) => {
      if (!data.Item) {
        let url = `https://${store}/admin/oauth/authorize?client_id=${config.BIZWEB_CLIENT_ID}&scope=${scopes}&redirect_uri=${config.BIZWEB_REDIRECT_URI}`;
        res.redirect(url);
      }
      else res.redirect(`/?store=${store}&timestamp=${timestamp}&hmac=${hmac}`);
    });
  }
  else if (store && code) {
    let response = await getAccessToken(store, code);
    let params = {
      TableName: config.TABLE_STORE,
      Item: {
        "storeAlias": store,
        "accessToken": response.access_token,
        "currentAccountInfo": null,
        "fbUserAccessToken": null,
        "createdAt": Date.now(),
        "modifiedAt": Date.now(),
        status: 1
      }
    };
    await documentClient.put(params, (err, data) => {
      if (err) {
        console.log('save error', err);
      }
      else console.log('save successed', data);
    });
    res.redirect(`/?store=${store}&timestamp=${timestamp}&hmac=${hmac}`);
  }
  else {
   res.redirect(`/?store=${store}&timestamp=${timestamp}&hmac=${hmac}`);
  }
}

function getAccessToken(store, code) {
  const uri = `https://${store}/admin/oauth/access_token`;
  let client_id = config.BIZWEB_CLIENT_ID;
  let client_secret = config.BIZWEB_SECRET_KEY;
  const body = JSON.stringify({
    client_id: client_id,
    client_secret: client_secret,
    code: code
  });
  return fetch(uri, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body
  }).then(function (res) {
    return res.json();
  }).catch(err => {
    return err;
  });
}
