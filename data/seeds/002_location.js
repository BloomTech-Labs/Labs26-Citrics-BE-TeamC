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
        },
        {
          location:
            `Montgomery, AL`
          ,
        },
        {
          location:
            `Little Rock, AR`
          ,
        },
        {
          location:
            `Phoenix, AZ`
          ,
        },
        {
          location:
            `Sacramento, CA`
          ,
        },
        {
          location:
            `Denver, CO`
          ,
        },
        {
          location:
            `Hartford, CT`
          ,
        },
        {
          location:
            `Dover, DE`
          ,
        },
        {
          location:
            `Tallahassee, FL`
          ,
        },
        {
          location:
            `Atlanta, GA`
          ,
        },
        {
          location:
            `Honolulu, HI`
          ,
        },
        {
          location:
            `Des Moines, IA`
          ,
        },
        {
          location:
            `Boise, ID`
          ,
        },
        {
          location:
            `Springfield, IL`
          ,
        },
        {
          location:
            `Indianapolis, IN`
          ,
        },
        {
          location:
            `Topeka, KS`
          ,
        },
        {
          location:
            `Frankfort, KY`
          ,
        },
        {
          location:
            `Baton Rouge, LA`
          ,
        },
        {
          location:
            `Boston, MA`
          ,
        },
        {
          location:
            `Annapolis, MD`
          ,
        },
        {
          location:
            `Augusta, ME`
          ,
        },
        {
          location:
            `Lansing, MI`
          ,
        },
        {
          location:
            `Saint Paul, MN`
          ,
        },
        {
          location:
            `Jefferson City, MO`
          ,
        },
        {
          location:
            `Jackson, MS`
          ,
        },
        {
          location:
            `Helena, MT`
          ,
        },
        {
          location:
            `Raleigh, NC`
          ,
        },
        {
          location:
            `Bismarck, ND`
          ,
        },
        {
          location:
            `Lincoln, NE`
          ,
        },
        {
          location:
            `Concord, NH`
          ,
        },
        {
          location:
            `Trenton, NJ`
          ,
        },
        {
          location:
            `Santa Fe, NM`
          ,
        },
        {
          location:
            `Carson City, NV`
          ,
        },
        {
          location:
            `Albany, NY`
          ,
        },
        {
          location:
            `Columbus, OH`
          ,
        },
        {
          location:
            `Oklahoma City, OK`
          ,
        },
        {
          location:
            `Salem, OR`
          ,
        },
        {
          location:
            `Harrisburg, PA`
          ,
        },
        {
          location:
            `Providence, RI`
          ,
        },
        {
          location:
            `Columbia, SC`
          ,
        },
        {
          location:
            `Pierre, SD`
          ,
        },
        {
          location:
            `Nashville, TN`
          ,
        },
        {
          location:
            `Austin, TX`
          ,
        },
        {
          location:
            `Salt Lake City, UT`
          ,
        },
        {
          location:
            `Richmond, VA`
          ,
        },
        {
          location:
            `Montpelier, VT`
          ,
        },
        {
          location:
            `Olympia, WA`
          ,
        },
        {
          location:
            `Madison, WI`
          ,
        },
        {
          location:
            `Charleston, WV`
          ,
        },
        {
          location:
            `Cheyenne, WY`
          ,
        }
      ]);
    });
};