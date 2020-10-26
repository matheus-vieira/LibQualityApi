import express from "express";
const { Router } = express;
const router = Router();

/**
 * This functions retrive a list of users
 * @route GET /users
 * @group Users - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @swagger
 * /users:
 *    get:
 *      description: This should return all users
 *      responses:
 *          "200":
 *            description: "successful operation"
 *          schema:
 *            type: array
 *            $ref: "#/definitions/user"
 *          "404":
 *            description: "Project not found"
 */

router.get("/", function (req, res, next) {
  res.send("should return a list of users!");
});

export default router;
