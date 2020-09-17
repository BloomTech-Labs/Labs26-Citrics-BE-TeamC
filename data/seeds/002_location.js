exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {
          location:
            `Juneau, AK`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Alabama_State_Capitol%2C_Montgomery%2C_West_view_20160713_1.jpg/2560px-Alabama_State_Capitol%2C_Montgomery%2C_West_view_20160713_1.jpg'
        },
        {
          location:
            `Montgomery, AL`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Alabama_State_Capitol%2C_Montgomery%2C_West_view_20160713_1.jpg/2560px-Alabama_State_Capitol%2C_Montgomery%2C_West_view_20160713_1.jpg'
        },
        {
          location:
            `Little Rock, AR`
          ,
          image: ''
        },
        {
          location:
            `Phoenix, AZ`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Downtown_Phoenix_Skyline_Lights.jpg/2880px-Downtown_Phoenix_Skyline_Lights.jpg'
        },
        {
          location:
            `Sacramento, CA`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tower_Bridge_Sacramento_edit.jpg'
        },
        {
          location:
            `Denver, CO`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Downtown_denver.jpg'
        },
        {
          location:
            `Hartford, CT`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Penfield_Reef_Light_CT_01_NRHP_89001473.jpg'
        },
        {
          location:
            `Dover, DE`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Delaware_Seashore_State_Park_DE1.jpg/2880px-Delaware_Seashore_State_Park_DE1.jpg'
        },
        {
          location:
            `Tallahassee, FL`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Rainbow_River.jpg/2880px-Rainbow_River.jpg'
        },
        {
          location:
            `Atlanta, GA`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Midtown_atlanta.jpg'
        },
        {
          location:
            `Honolulu, HI`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hawaii_beach_-_Sihanoukville.jpg/2880px-Hawaii_beach_-_Sihanoukville.jpg'
        },
        {
          location:
            `Des Moines, IA`
          ,
          image: ''
        },
        {
          location:
            `Boise, ID`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Downtown_Boise.jpg'
        },
        {
          location:
            `Springfield, IL`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Grant_Park%2C_Chicago%2C_Illinois%2C_Estados_Unidos%2C_2012-10-20%2C_DD_03.jpg/2880px-Grant_Park%2C_Chicago%2C_Illinois%2C_Estados_Unidos%2C_2012-10-20%2C_DD_03.jpg'
        },
        {
          location:
            `Indianapolis, IN`
          ,
          image: ''
        },
        {
          location:
            `Topeka, KS`
          ,
          image: ''
        },
        {
          location:
            `Frankfort, KY`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Frankfort_kentucky.jpg'
        },
        {
          location:
            `Baton Rouge, LA`
          ,
          image: ''
        },
        {
          location:
            `Boston, MA`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Boston_Public_Garden_%2836008p%29.jpg'
        },
        {
          location:
            `Annapolis, MD`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Some_Annapolis_commercial_strip.jpg'
        },
        {
          location:
            `Augusta, ME`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Augusta%2C_Maine_street_view.jpg'
        },
        {
          location:
            `Lansing, MI`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Renaissance_Center%2C_Detroit%2C_Michigan_from_S_2014-12-07.jpg'
        },
        {
          location:
            `Saint Paul, MN`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lebanon_Hills_Regional_Park%2C_Minnesota.jpg/2560px-Lebanon_Hills_Regional_Park%2C_Minnesota.jpg'
        },
        {
          location:
            `Jefferson City, MO`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Missouri_Theatre_Alarm_Will_Sound_Bright.jpg/1600px-Missouri_Theatre_Alarm_Will_Sound_Bright.jpg'
        },
        {
          location:
            `Jackson, MS`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Paddling_the_Mississippi_River_%286972322139%29.jpg'
        },
        {
          location:
            `Helena, MT`
          ,
          image: ''
        },
        {
          location:
            `Raleigh, NC`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Skyhouse_Raleigh-20170328.jpg/2560px-Skyhouse_Raleigh-20170328.jpg'
        },
        {
          location:
            `Bismarck, ND`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Little_Missouri_in_Theodore_Roosevelt_NP_ND1.jpg/2880px-Little_Missouri_in_Theodore_Roosevelt_NP_ND1.jpg'
        },
        {
          location:
            `Lincoln, NE`
          ,
          image: ''
        },
        {
          location:
            `Concord, NH`
          ,
          image: ''
        },
        {
          location:
            `Trenton, NJ`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/View_of_New_York_City_and_Jersey_City_from_Caven_Point%2C_Jersey_City%2C_New_Jersey.jpg/2560px-View_of_New_York_City_and_Jersey_City_from_Caven_Point%2C_Jersey_City%2C_New_Jersey.jpg'
        },
        {
          location:
            `Santa Fe, NM`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Northern_New_Mexico.jpg/2560px-Northern_New_Mexico.jpg'
        },
        {
          location:
            `Carson City, NV`
          ,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg/2880px-Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg'
        },
        {
          location:
            `Albany, NY`
          ,
          image: ''
        },
        {
          location:
            `Columbus, OH`
          ,
          image: ''
        },
        {
          location:
            `Oklahoma City, OK`
          ,
          image: ''
        },
        {
          location:
            `Salem, OR`
          ,
          image: ''
        },
        {
          location:
            `Harrisburg, PA`
          ,
          image: ''
        },
        {
          location:
            `Providence, RI`
          ,
          image: ''
        },
        {
          location:
            `Columbia, SC`
          ,
          image: ''
        },
        {
          location:
            `Pierre, SD`
          ,
          image: ''
        },
        {
          location:
            `Nashville, TN`
          ,
          image: ''
        },
        {
          location:
            `Austin, TX`
          ,
          image: ''
        },
        {
          location:
            `Salt Lake City, UT`
          ,
          image: ''
        },
        {
          location:
            `Richmond, VA`
          ,
          image: ''
        },
        {
          location:
            `Montpelier, VT`
          ,
          image: ''
        },
        {
          location:
            `Olympia, WA`
          ,
          image: ''
        },
        {
          location:
            `Madison, WI`
          ,
          image: ''
        },
        {
          location:
            `Charleston, WV`
          ,
          image: ''
        },
        {
          location:
            `Cheyenne, WY`
          ,
          image: ''
        }
      ]);
    });
};