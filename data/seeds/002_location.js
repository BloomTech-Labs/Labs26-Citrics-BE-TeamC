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
          image: 'https://www.addictioncenter.com/app/uploads/2018/10/LittleRock.jpeg'
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
          image: 'https://growlermag-media.s3.amazonaws.com/wp-content/uploads/20180321103717/Des-Moines-Photo-by-Jason-Mrachina-Flickr-Featured-Image.jpg'
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
          image: 'https://a.cdn-hotels.com/gdcs/production140/d372/89e4bb5c-3362-43a3-9e01-da5a9f5d0b66.jpg'
        },
        {
          location:
            `Topeka, KS`
          ,
          image: 'https://www.ed2go.com/Includes/geo/images/CityBanner/topeka-ks.jpg'
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
          image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_700,q_50,w_1600/v1/clients/batonrouge/downtown_876e3fff-5900-49e8-8f87-b18752269302.jpg'
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
          image: 'https://ap.rdcpix.com/f25e9af8207649290be63ccafad8fb9bl-m422820908xd-w1020_h770_q80.jpg'
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
          image: 'https://www.addictionresource.net/wp-content/uploads/2020/02/lincoln-nebraska-drug-rehab-options.jpg'
        },
        {
          location:
            `Concord, NH`
          ,
          image: 'https://magazine.northeast.aaa.com/wp-content/uploads/2019/01/things-to-do-in-concord-new-hampshire-1-640x423.jpg'
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
          image: 'https://res.cloudinary.com/simpleview/image/upload/v1506702103/clients/albany/banner_carousel_img_01_0fb5fe76-215f-4a7b-8246-641dac6a0d01.jpg'
        },
        {
          location:
            `Columbus, OH`
          ,
          image: 'https://cdn.justluxe.com/articles/images/news/15671742752872.jpg'
        },
        {
          location:
            `Oklahoma City, OK`
          ,
          image: 'https://www.okcchamber.com/clientuploads/IMAGES/Site%20Images/forwardokc_banner.jpg'
        },
        {
          location:
            `Salem, OR`
          ,
          image: 'https://cdn.thecrazytourist.com/wp-content/uploads/2019/03/ccimage-shutterstock_1331211557.jpg'
        },
        {
          location:
            `Harrisburg, PA`
          ,
          image: 'https://www.breweriesinpa.com/wp-content/uploads/2019/09/Harrisburg-Street.jpeg'
        },
        {
          location:
            `Providence, RI`
          ,
          image: 'https://specials-images.forbesimg.com/imageserve/967099380/960x0.jpg?cropX1=0&cropX2=7360&cropY1=378&cropY2=4516'
        },
        {
          location:
            `Columbia, SC`
          ,
          image: 'https://colatoday.6amcity.com/wp-content/uploads/sites/5/2020/05/cinematic.aerials_95763278_153168172877684_2838907117486367463_n-965x545.jpg'
        },
        {
          location:
            `Pierre, SD`
          ,
          image: 'https://mk0xituxemauaaa56cm7.kinstacdn.com/wp-content/uploads/2019/03/GettyImages-163852169.jpg'
        },
        {
          location:
            `Nashville, TN`
          ,
          image: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/nashville-sunset-jonathan-ross.jpg'
        },
        {
          location:
            `Austin, TX`
          ,
          image: 'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_1200/v1548256026/photos/288314_original.jpg'
        },
        {
          location:
            `Salt Lake City, UT`
          ,
          image: 'https://www.nbc12.com/resizer/YmLHg5erXkMl1b00qIQ_WXiLukQ=/0x190:3880x2130/3880x1940/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/TCLPKUBKA5ANDBWMANB657J4IQ.jpg'
        },
        {
          location:
            `Richmond, VA`
          ,
          image: 'https://www.nbc12.com/resizer/YmLHg5erXkMl1b00qIQ_WXiLukQ=/0x190:3880x2130/3880x1940/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/TCLPKUBKA5ANDBWMANB657J4IQ.jpg'
        },
        {
          location:
            `Montpelier, VT`
          ,
          image: 'https://previews.123rf.com/images/sepavo/sepavo1710/sepavo171000057/88199272-montpelier-vermont-usa-town-skyline-in-autumn-.jpg'
        },
        {
          location:
            `Olympia, WA`
          ,
          image: 'https://gravislaw.com/wp-content/uploads/2018/10/olympia-water-1024x682.jpg'
        },
        {
          location:
            `Madison, WI`
          ,
          image: 'https://media2.govtech.com/images/940*611/shutterstock_678378805.jpg'
        },
        {
          location:
            `Charleston, WV`
          ,
          image: 'https://i.insider.com/577d0e6bdd08956b7b8b45d2?width=1100&format=jpeg&auto=webp'
        },
        {
          location:
            `Cheyenne, WY`
          ,
          image: 'https://i.ytimg.com/vi/dMm5eujgF7k/maxresdefault.jpg'
        }
      ]);
    });
};