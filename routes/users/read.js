import express from "express";
import expressValidator from "express-validator";
import validator from "../../middlewares/validators/User.js";
import readController from "../../controllers/users/read.js";
import Messages from "../../utils/errorMessage.js";

const router = express.Router();

router.post("/", validator, async (req, res) => {
  debug("checking validation");
  const result = expressValidator.validationResult(req);

  if (!result.isEmpty()) {
    for (const e of result.errors) error(JSON.stringify(e));
    return res.status(400).json(Messages["400"]);
  }

  try {
    const data = await readController.save(req.body);
    if (data) return res.status(200).json({ data: data });
    throw new Error(Messages["404"]);
  } catch (err) {
    error(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(err.message);
  }
});

export default router;
