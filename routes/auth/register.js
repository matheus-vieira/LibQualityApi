import express from 'express';
import expressValidator from 'express-validator';
import validator from '../../middlewares/validators/auth/register.js';
import registerController from '../../controllers/auth/register.js';
import logger from '../../utils/logging/logger.js';
import Messages from '../../utils/errorMessage.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/auth/register:
 *    post:
 *      tags: [Auth]
 *      Summary: Register an user
 *      description: Creates an user in the database with encrypted password
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: "email"
 *          in: "body"
 *          description: "The email of the new user."
 *          required: true
 *          type: "string"
 *          example: "test@test.com"
 *        - name: "password"
 *          in: "body"
 *          description: "The password of the new user."
 *          required: true
 *          type: "string"
 *          example: "securePass"
 *      responses:
 *         "200":
 *           description: "successful operation"
 */
router.post('/register', validator, async (req, res) => {
  logger.debug('checking validation');
  const result = expressValidator.validationResult(req);

  if (!result.isEmpty()) {
    for (const e of result.errors) logger.error(JSON.stringify(e));
    return res.status(400).json({ errors: result.errors });
  }

  try {
    const data = await registerController.register(req.body);

    if (!data) throw new Error(Messages['404']);

    return res.status(200).json({
      user: { email: data.email, createdAt: data.createdAt },
      msg: 'User created successfully',
    });
  } catch (err) {
    logger.error(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ error: err.message, msg: 'Unable to register' });
  }
});

export default router;
