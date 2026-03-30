import * as cartController from "./controller/cart.js";
import { endPoint } from "./cart.endpoint.js";
import { auth } from "../../middleware/auth.js";
import { Router } from "express";
/**
 * @swagger
 * tags:
 * name: Cart
 * description: User shopping cart management
 */

/**
 * @swagger
 * /cart:
 * post:
 * summary: Add product to cart or update quantity
 * tags: [Cart]
 * security:
 * - bearerAuth: []
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * productId: {type: string}
 * quantity: {type: number}
 */
const router = Router();
router.post("/", auth(endPoint.create), cartController.createCart);
router.patch("/remove", auth(endPoint.create), cartController.deleteItems);
router.patch(
  "/clear",
  auth(endPoint.create),
  cartController.clearCartController
);
export default router;
