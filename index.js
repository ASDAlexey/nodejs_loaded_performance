const axios = require('axios');
const _ = require('lodash');
const os = require('os');

// const URL = 'https://api.bee-inbound.dev.sg.umbrella-web.com/wishlist';
const URL = 'http://107.20.6.36/wishlist';
const data = {
  "products": [
    {
      "id": "21400697",
      "name": "otoren Rohrmotor RolloTube Basis Small",
      "type": "RTBS 06/28Z",
      "category": "category_product_rohrmotoren",
      "tag": "21400697_rohrmotor_rollotube_basis_small_rtbs_06_28z",
      "description": "description test 1",
      "thumbnail": "http://cdn.newsapi.com.au/image/v1/ae0a6aa9b5e53c3a4158937fa0676dd4?width=1024",
      "link": "http://radech.vadev.net",
      "price": 100,
      "entryId": 12345,
      "featureType": "wishlist",
      "archived": false,
      "quantity": 2,
      "children": [
        {
          "id": "11",
          "name": "otoren Rohrmotor RolloTube Basis Small",
          "type": "RTBS 06/28Z",
          "category": "category_product_rohrmotoren",
          "tag": "11_rohrmotor_rollotube_basis_small_rtbs_06_28z",
          "description": "description test 1",
          "thumbnail": "https://pbs.twimg.com/profile_images/463159491048259584/ew4jWZJC.jpeg",
          "link": "http://radech.vadev.net",
          "price": 100,
          "entryId": 12345,
          "featureType": "wishlist",
          "archived": false,
          "quantity": 2
        }
      ]
    }
  ],
  "user": {
    "title": "user_anrede_herr",
    "customerType": "customer_endkunde",
    "firstName": "Alex",
    "lastName": "Popov",
    "email": "testuser1@test.com",
    "phone": "+498928972805",
    "street": "Petrovskaya 120",
    "postalCode": "347900",
    "country": "Russia",
    "city": "Taganrog"
  },
  "message": "ticket message",
  "newsletter": true,
  "adviseProduct": true
};
const COUNT_REQUESTS = 2;
const promises = [];

for (let i of _.range(COUNT_REQUESTS)) {
  data.user.email = `asdalexey100${i}@yanded.com`;
  promises.push(axios.post(URL, data));
}


console.time('start');
Promise.all(promises).then((res) => {
  const result = res.map((item) => (item.data));
  console.timeEnd('start');
  require('fs').writeFileSync('./data.json', JSON.stringify(result, null, 4));
}).catch(function (error) {
  console.log(error);
  console.timeEnd('start');
});