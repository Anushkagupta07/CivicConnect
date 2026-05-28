const express = require("express");
const router  = express.Router();
const { register, login, getMe, promoteUser, demoteUser, getAdmins } = require("../controllers/authController");
const { protect, levelGuard } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login",    login);
router.get ("/me",       protect, getMe);

router.patch("/promote", protect, levelGuard(2), promoteUser);
router.patch("/demote",  protect, levelGuard(2), demoteUser);
router.get  ("/admins",  protect, levelGuard(1), getAdmins);

module.exports = router;