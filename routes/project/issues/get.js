import express from 'express';
import expressValidator from 'express-validator';
import getController from '../../../controllers/project/issues/get.js';
import logger from '../../../utils/logging/logger.js';
import Messages from '../../../utils/errorMessage.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Projects Issues
 *   description: Repo issue management.
 * 
 * /project/{owner}/{repo}/issues:
 *    get:
 *      tags: ["Projects Issues"]
 *      description: If a correct repository name is passed it should return some metrics
 *      produces:
 *        - application/json
 *      parameters: 
 *        - name: "owner"
 *          in: "path"
 *          description: "The userid which maintain the project. "
 *          required: true
 *          type: "string"
 *          example: angular
 *        - name: "repo"
 *          in: "path"
 *          description: "The name of the project to retrieve metrics. "
 *          required: true
 *          type: "string"
 *          example: angular
 *      responses:
 *         "200":
 *           description: "successful operation"
 *           schema:
 *             type: "array"
 *             items:
 *               $ref: "#/definitions/project-issue"
 *         "404":
 *           description: "Project not found"
 */
router.get('/:owner/:repo/issues', async (req, res) => {
  logger.debug('checking validation');
  const result = expressValidator.validationResult(req);

  if (!result.isEmpty()) {
    for (const e of result.errors) logger.error(JSON.stringify(e));
    return res.status(400).json(Messages['400']);
  }

  try {
    const data = await getController.get(req.params);

    if (data) return res.status(200).json({ data: data });
    throw new Error(Messages['404']);
  } catch (err) {
    logger.error(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(err.message);
  }
});

export default router;
