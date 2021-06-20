const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/api/v1/user_controller");

/**
 * @swagger
 * /register:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */

router.post("/register", userController.register);

/**
 * @swagger
 * /gettoken:
 *  post:
 *    description: Use to genrate jwt token for user to login
 *    responses:
 *      '200':
 *        description: user created successful
 */

router.post("/gettoken", userController.getToken);

module.exports = router;
