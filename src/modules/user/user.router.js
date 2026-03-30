import { auth, roles } from "../../middleware/auth.js";
import * as userController from "./controller/user.js";
import { Router } from "express";
const router = Router();
/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User profiles and Wishlist management
 */

/**
 * @swagger
 * /product/{productId}/wishlist:
 *   patch:
 *     summary: Add or update product in user wishlist
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", auth(Object.values(roles)), userController.userList);
export default router;
