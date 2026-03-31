import * as authcontroller from "./controller/auth.js";
import { validation } from "../../middleware/validation.js";
import * as validators from "./auth.validation.js";
import { Router } from "express";
import passport from "passport";
/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Login and Signup operations
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
const router = Router();
router.post("/signup", validation(validators.signup), authcontroller.signup);
router.post("/login", validation(validators.login), authcontroller.Login);
router.post("/loginwithgmail", authcontroller.LoginWithGmail);
router.patch(
  "/sendcode",
  validation(validators.sendCode),
  authcontroller.sendCode
);
router.patch(
  "/forgetpassword",
  validation(validators.forgetPassword),
  authcontroller.forgetpassword
);

export default router;
