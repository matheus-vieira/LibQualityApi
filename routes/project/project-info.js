import express from "express";
const { Router } = express;
const router = Router();

/**
 * @swagger
 * /project-info/{project-name}:
 *    tags:
 *    - "project"
 *    get:
 *      description: If a correct repository name is passed it should return some metrics
 *      produces:
 *        - application/json
 *      parameters: 
 *        - name: "project-name"
 *          in: "path"
 *          description: "The name of the project to retrieve metrics. "
 *          required: true
 *          type: "string"
 *          example: angular
 *      responses:
 *          "200":
 *            description: "successful operation"
 *          schema:
 *            $ref: "#/definitions/project-metrics"
 *          "404":
 *            description: "Project not found"
 */
router.get("/:name", function (req, res, next) {
  const { name } = req.params;
  res.send(`should some info about ${name}!`);
});

export default router;
