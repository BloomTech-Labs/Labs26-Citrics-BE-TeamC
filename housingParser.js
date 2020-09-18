const { AL, AZ, AR, CA, CO, CT, DC, FL, GA, ID, IL, IN, IA, KS, KY, LA, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, WA, WI, WY } = require('./housingData')

//there is no AK, AS, DE, FM, GU, HI, ME, MH, VT, VI, WV info

function mrParser(string) {
    let replaceStr = string.replace(/\s+/g, ' ');
    //console.log(replaceStr);

    var obj = JSON.parse(replaceStr);

    // key is the State
    const keys = Object.keys(obj)

    // values is city name and housing
    const valuesObj = Object.values(obj)

    //console.log(obj)
    // console.log(keys)
    //console.log(valuesObj[0])

    let obj2 = valuesObj[0]

    // do the same just to get city name
    let obj2Keys = Object.keys(obj2)

    //console.log(obj2Keys)

    let newArr = []

    for (let i = 0; i < obj2Keys.length; i++) {

        let x = obj2Keys[i].split(',').join('')
        x = x.slice(0, x.length - 2);

        newArr.push(x)

    }

    //console.log(newArr)

    let obj2Values = Object.values(obj2)

    //console.log(obj2Values)

    let newArrHousing = []

    for (let i = 0; i < obj2Values.length; i++) {

        let x = obj2Values[i].split(',').join('')
        newArrHousing.push(x)
    }

    var arrayOfNumbers = newArrHousing.map(Number);

    //console.log(arrayOfNumbers)

    for (let i = 0; i < obj2Keys.length; i++) {

        const housingData =
        {
            state: keys[0],
            city: newArr[i],
            housing: arrayOfNumbers[i]
        }

        console.log(housingData)
    }
}

let states = [AL, AZ, AR, CA, CO, CT, DC, FL, GA, ID, IL, IN, IA, KS, KY, LA, MD, MA, MI,
    MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC,
    SD, TN, TX, UT, VA, WA, WI, WY];



for (let i = 0; i < states.length; i++) {

    mrParser(states[i]);


}






