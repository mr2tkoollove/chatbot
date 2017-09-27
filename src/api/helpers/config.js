'use-trict';

//bizweb params
const BIZWEB_CLIENT_ID = process.env.BIZWEB_CLIENT_ID || '7bc8d247b1f54b82bc0af25f6fc9f405';
const BIZWEB_SECRET_KEY = process.env.BIZWEB_SECRET_KEY || '83794961b01049e691ff9dfc8dbe7fce';
const BIZWEB_REDIRECT_URI = process.env.BIZWEB_REDIRECT_URI || 'https://dkt-chatbot3.herokuapp.com/api/auth';

//facebook params
const FB_CLIENT_ID = process.env.FB_CLIENT_ID || '443404942707731';
const FB_SECRET_KEY = process.env.FB_SECRET_KEY || '25398cf4fd6e3aec751ddbffd29aa837';
const FB_REDIRECT_URI = process.env.FB_REDIRECT_URI || 'https://dkt-chatbot3.herokuapp.com';

const TABLE_STORE = 'Messenger_Stores';
const TABLE_ACCOUNT = 'Messenger_Accounts';
const TABLE_PAGE = 'Messenger_Pages';
const TABLE_USER = 'Messenger_Users';
const TABLE_CART = 'Messenger_Carts';
const TABLE_ORDER = 'Messenger_Orders';
const TABLE_PAYLOAD = 'Messenger_Payloads';

module.exports = {
  BIZWEB_CLIENT_ID: BIZWEB_CLIENT_ID,
  BIZWEB_SECRET_KEY: BIZWEB_SECRET_KEY,
  BIZWEB_REDIRECT_URI: BIZWEB_REDIRECT_URI,
  FB_CLIENT_ID: FB_CLIENT_ID,
  FB_SECRET_KEY: FB_SECRET_KEY,
  FB_REDIRECT_URI: FB_REDIRECT_URI,
  TABLE_STORE, TABLE_ACCOUNT, TABLE_PAGE, TABLE_USER, TABLE_CART, TABLE_ORDER, TABLE_PAYLOAD // table name
}
