/**
 * Created by user on 9/20/17.
 */
defaultPersistentMenu = function () {
  return {
    "persistent_menu": [
      {
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions": [
          {
            "title": "Main Menu",
            "type": "postback",
            "payload": "MAIN_MENU"
          },
          {
            "title": "Giỏ hàng",
            "type": "postback",
            "payload": "VIEW_CART"
          },
          {
            "title": "Xem thêm",
            "type": "nested",
            "call_to_actions": [
              {
                "title": "Thông tin liên hệ",
                "type": "postback",
                "payload": "CONTACT_INFO"
              },
              {
                "title": "Chat với nhân viên",
                "type": "postback",
                "payload": "CHAT_WITH_STAFF"
              },
              {
                "title": "Xem trạng thái đơn hàng",
                "type": "postback",
                "payload": "STATUS_ORDER"
              },
              {
                "title": "Xem thêm nữa",
                "type": "postback",
                "payload": "OTHER"
              }
            ]
          }
        ]
      }
    ]
  }
}

defaultMainMenu = function () {
  return {
    "message": {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": "Xin chào, đây là những chức năng hiện có của chúng tôi",
          "buttons": [
            {
              "type": "postback",
              "payload": "SEARCH_PRODUCT",
              "title": "Tìm kiếm"
            },
            {
              "type": "postback",
              "payload": "VIEW_ALL_COLLECTIONS",
              "title": "Danh mục sản phẩm"
            },
            {
              "type": "postback",
              "payload": "CONTACT_INFO",
              "title": "Thông tin liên hệ"
            }
          ]
        }
      }
    }
  }
}

defaultGetStartedButton = function () {
  return "Chào mừng bạn đến với bot của chúng tôi, dưới đây là danh sách những chức năng chính của chương trình";
}

module.exports = {
  defaultMainMenu: defaultMainMenu,
  defaultPersistentMenu: defaultPersistentMenu,
  defaultGetStartedButton: defaultGetStartedButton
};
