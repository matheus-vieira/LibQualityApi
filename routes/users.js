import express from "express";
const { Router } = express;
const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('should return a list of users!');
});

export default router;
