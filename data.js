const axios = require('axios');

const API = 'http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/weather'

const get = async (url) => {
  const { data } = await axios.get(url)
  // console.log(JSON.parse(data).DC['Washington, DC'])
  console.log(Object.keys(JSON.parse(data)))
}

get(API)