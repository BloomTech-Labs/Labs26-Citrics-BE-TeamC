var express = require('express');
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

router.get('/', (req, res) => {
  if (req.userContext) {
    // console.log(req.session.passport.user.tokens)
    // res.json({ token: req.session.passport.user.tokens })
    // const token = req.session.passport.user.tokens
    res.send(`
      Hello ${req.userContext.userinfo.name}!
      <form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </form>
    `);
  } else {
    res.send('Please <a href="/login">login</a>');
  }
});

module.exports = router;