const request = require('request');

const getAvg = () => {
  request('http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/housing', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }

    // GETTING KEYS 
    // [
    //   'NY', 'CA', 'IN', 'FL', 'UT', 'AL',
    //   'OK', 'GA', 'NJ', 'MA', 'AR', 'TX',
    //   'AZ', 'OR', 'WY', 'NC', 'MN', 'NV',
    //   'NE', 'IL', 'WI', 'MI', 'CO', 'WA',
    //   'MT', 'VA', 'MO', 'IA', 'LA', 'ND',
    //   'ID', 'CT', 'PA', 'SD', 'TN', 'OH',
    //   'MD', 'DC', 'NM', 'MS', 'KS', 'SC',
    //   'KY', 'RI', 'NH'
    // ]

    // [
    //   'GA', 'PA', 'TX', 'CA', 'VA', 'NM', 'NY',
    //   'OH', 'CO', 'ME', 'WA', 'NC', 'MN', 'WI',
    //   'FL', 'MI', 'MD', 'IA', 'IN', 'MA', 'LA',
    //   'ID', 'MO', 'ND', 'AL', 'MT', 'IL', 'AR',
    //   'OR', 'NJ', 'TN', 'AZ', 'WY', 'WV', 'SC',
    //   'NV', 'OK', 'CT', 'KY', 'DE', 'RI', 'NH',
    //   'MS', 'NE', 'UT', 'KS', 'AK', 'HI', 'VT',
    //   'SD', 'DC'
    // ]
    // console.log(Object.keys(JSON.parse(body)));
    // console.log(Object.values(JSON.parse(body)));
    console.log(JSON.parse(body))

    Object.entries(JSON.parse(body)).map(e => {
      const state = e[0]
      const cities = e[1]
      // console.log(state, cities)

      // Getting length for object
      Object.size = function (obj) {
        var size = 0, key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };

      // Getting avg housing for state
      function average(obj) {
        var sum = 0;
        for (var el in obj) {
          if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
          }
        }
        var avg = sum / Object.size(obj)
        return avg;
      }
      var avg = average(cities);
      // return console.log({ state, average: avg.toFixed(2) })
      // return JSON.parse(body)

    })
  })
}
// console.log(getAvg())
getAvg()

module.exports = { getAvg }