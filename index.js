const axios = require('axios')

const url = 'http://localhost:3000/api/saveItem';

axios.post(url, {})
.then((res) => {
  console.log(`statusCode: ${res.status}`);
  console.log(res.data);
})
.catch((error) => {
  console.error(error);
})