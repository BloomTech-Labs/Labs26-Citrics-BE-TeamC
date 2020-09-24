const request = require('request');

const getJobs = () => {
    request('http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/jobs', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }

        let obj = JSON.parse(body)

        // key is the State
        const keys = Object.keys(obj)

        // values is job attributes and values for each attribute
        const values = Object.values(obj)

        const valuesKeys = Object.keys(values[0])

        //console.log(valuesKeys)

        const jobsObjArr = []

        valuesKeys.map(e => {
            const replaceFirst = e[0].toLowerCase() + e.slice(1, e.length)
            const removeSpaces = replaceFirst.replace(/ /g, '')
            const jobsObjKey = removeSpaces.replace(/-/g, '')

            jobsObjArr.push(jobsObjKey)

            //keys
            //console.log(jobsObjKey)
        })

        //console.log(jobsObjArr)

        const valuesValuesArr = []


        values.map(e => {
            const valuesValues = Object.values(e)

            valuesValuesArr.push(valuesValues)

        })

        let newArr = []


        for (let i = 0; i < keys.length; i++) {

            let obj2 = {}

            for (let j = 0; j < jobsObjArr.length; j++) {

                obj2[jobsObjArr[j]] = valuesValuesArr[i][j]
            }
            newArr.push(obj2)
        }

        //console.log(newArr)

        let newArr2 = []

        for (let i = 0; i < keys.length; i++) {

            let obj4 = {
                [keys[i]]: newArr[i]
            }
            newArr2.push(obj4)

        }

        console.log(newArr2)

    })
}


getJobs();


module.exports = { getJobs }


// const obj3 = {
//     WY: {
//         totalNonfarm: 288.90171428571404,
//         totalPrivateSector: 218.99771428571424,
//         totalGovernmentSector: 69.90399999999997,
//         totalGoodsProducing: 56.92285714285718,
//         totalServiceProviding: 231.97885714285707,
//         totalMiningandLogging: 24.527428571428576,
//         totalManufacturing: 9.59485714285714,
//         totalDurableGoods: 4.785714285714287,
//         totalWholesaleTrade: 8.646857142857142,
//         totalTelecommunications: 0,
//         totalRealEstate: 0,
//         totalCommercialBanking: 0,
//         totalTransportation: 4.2200000000000015,
//         totalTransportationandUtilities: 14.610285714285716
//     },
//     NY: {
//         totalNonfarm: 288.90171428571404,
//         totalPrivateSector: 218.99771428571424,
//         totalGovernmentSector: 69.90399999999997,
//         totalGoodsProducing: 56.92285714285718,
//         totalServiceProviding: 231.97885714285707,
//         totalMiningandLogging: 24.527428571428576,
//         totalManufacturing: 9.59485714285714,
//         totalDurableGoods: 4.785714285714287,
//         totalWholesaleTrade: 8.646857142857142,
//         totalTelecommunications: 0,
//         totalRealEstate: 0,
//         totalCommercialBanking: 0,
//         totalTransportation: 4.2200000000000015,
//         totalTransportationandUtilities: 14.610285714285716
//     },

// }
// console.log(obj3.NY.totalNonfarm)




