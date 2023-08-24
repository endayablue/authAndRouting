const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/', userVerification);
router.post('/profile', userVerification);
router.post('/restricted', userVerification, async (req, res) => {});

module.exports = router;