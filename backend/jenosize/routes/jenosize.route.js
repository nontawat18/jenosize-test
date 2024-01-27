const express = require('express');
const { getPlace, game24, signup, boardBotGame, moveBotGame } = require('../controllers/jenosize.controller');
const router = express.Router()
const apiKeyMiddleware = require('../middleware/apikey-middleware');


router.post("/place", apiKeyMiddleware, getPlace)
router.post("/game24", apiKeyMiddleware, game24)
router.post("/signup", apiKeyMiddleware, signup)
router.get("/boardGame", apiKeyMiddleware, boardBotGame)
router.post("/moveGame", moveBotGame)




module.exports = router