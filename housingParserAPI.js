const request = require('request');

const getHousing = () => {
    request('http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/housing', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }


        let obj = JSON.parse(body)

        // console.log(obj)

        // key is the State
        const keys = Object.keys(obj)

        // values is city name and housing
        const valuesArr = Object.values(obj)


        // console.log('this is all the data object', obj)

        // //logs all the states initials
        // console.log('this is the keys array', keys)

        // console.log('this is the values array', valuesArr)


        let newArr = []

        let newArrState = []


        for (let i = 0; i < valuesArr.length; i++) {
            let obj3 = Object.keys(valuesArr[i])
            obj3.map(e => {
                let x = e.split(',').join('')
                y = x.slice(x.length - 2, x.length)
                x = x.slice(0, x.length - 2);

                newArr.push(x.slice(0, -1))
                newArrState.push(y)
            })
        }

        console.log('this is all the cities in one huge array', newArr)

        console.log(newArrState)

        let newArrHousing = []

        for (let i = 0; i < valuesArr.length; i++) {
            let keyValue = Object.values(valuesArr[i])

            keyValue.map(e => {
                let x = e.split(',').join('')
                newArrHousing.push(x)
            })
        }
        var arrayOfNumbers = newArrHousing.map(Number);
        console.log(arrayOfNumbers)

        for (let i = 0; i < newArr.length; i++) {

            const housingData =
            {
                state: newArrState[i],
                city: newArr[i],
                housing: arrayOfNumbers[i]
            }
            console.log(housingData)
        }
    })
}


getHousing();


module.exports = { getHousing }