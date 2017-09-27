
const fetch = require('node-fetch');
const setMenu = (menu, pageAccessToken) => {
  const body = JSON.stringify(menu);
  const qs = `access_token=${encodeURIComponent(pageAccessToken)}`;
  const uri =`https://graph.facebook.com/v2.6/me/messenger_profile?${ qs }`;
  return fetch(uri, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body
  })
    .then(rsp => rsp.json())
    .then(json => {
      console.log('set menu succeeded',json);
      if (json.error && json.error.message) {
        throw new Error(json.error.message);
      }
      return json;
    });
};

const setWebhook = (pageAccessToken) => {
  const qs = `access_token=${encodeURIComponent(pageAccessToken)}`;
  const uri =`https://graph.facebook.com/v2.6/me/subscribed_apps?${ qs }`;
  return fetch(uri, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  })
    .then(rsp => rsp.json())
    .then(json => {
      console.log('set webhook succeeded',json);
      if (json.error && json.error.message) {
        throw new Error(json.error.message);
      }
      return json;
    });
}

const removeWebhook = (pageAccessToken) => {
  const qs = `access_token=${encodeURIComponent(pageAccessToken)}`;
  const uri =`https://graph.facebook.com/v2.6/me/subscribed_apps?${ qs }`;
  return fetch(uri, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
    .then(rsp => rsp.json())
    .then(json => {
      console.log('remove webhook succeeded',json);
      if (json.error && json.error.message) {
        throw new Error(json.error.message);
      }
      return json;
    });
}

const removePersistentMenu = (pageAccessToken) => {
  const body = JSON.stringify({
    "fields":[
      "persistent_menu"
    ]
  });
  const qs = `access_token=${encodeURIComponent(pageAccessToken)}`;
  const uri =`https://graph.facebook.com/v2.6/me/messenger_profile?${ qs }`;
  return fetch(uri, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body
  })
    .then(rsp => rsp.json())
    .then(json => {
      console.log('remove persistent menu succeeded',json);
      if (json.error && json.error.message) {
        throw new Error(json.error.message);
      }
      return json;
    });
}
module.exports = {
  setMenu,
  setWebhook,
  removeWebhook,
  removePersistentMenu
}
