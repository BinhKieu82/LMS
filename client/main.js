const axios = require('axios');

const doGetRequest = async () => {

  let res = await axios.get('http://localhost:5000/api/threads');
 
  console.log(res.data.threads);
}

doGetRequest();