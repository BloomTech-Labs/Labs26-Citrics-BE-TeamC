var express = require('express');
const axios = require('axios')
var router = express.Router();
/**
 * @swagger
 * /:
 *  get:
 *    description: root path returning status
 *    tags:
 *      - status
 *    produces:
 *      - applicaiton/json
 *    responses:
 *      200:
 *        description: status is up
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - api
 *              properties:
 *                api:
 *                  type: boolean
 *                  example: true
 */
// router.get('/', function (req, res) {
//   res.status(200).json({ api: 'up', timestamp: Date.now() });
// });

// router.get('/', (req, res) => {
//   if (req.userContext) {
//     // console.log(req.session.passport.user.tokens)
//     // res.json({ token: req.session.passport.user.tokens })
//     // const token = req.session.passport.user.tokens
//     res.send(`
//       Hello ${req.userContext.userinfo.name}!
//       <form method="POST" action="/logout">
//         <button type="submit">Logout</button>
//       </form>
//     `);
//   } else {
//     res.send('Please <a href="/login">login</a>');
//   }
// });
// const API = 'http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/housing'

// router.get('/', async (req, res) => {
//   try {
//     const { data } = await axios.get(API)
//     const keys = Object.keys(JSON.parse(data))

//     res.json({ keys, data: JSON.parse(data) })
//   }
//   catch (err) {
//     console.log(err)
//   }
// })

// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   try {
//     const { data } = await axios.get(API)
//     res.json(JSON.parse(data)[id])
//   }
//   catch (err) {
//     console.log(err)
//   }
// })

module.exports = router;