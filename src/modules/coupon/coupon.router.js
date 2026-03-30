import * as couponController from "./controller/coupon.js";
import * as validators from "./coupon.validation.js";
import { validation } from "../../middleware/validation.js";
import { fileUpload, fileValidation } from "../../utils/multer.js";
import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { endPoint } from "./coupon.endPoint.js";
/**
 * @swagger
 * tags:
 * name: Coupon
 * description: Discount coupons management
 */

/**
 * @swagger
 * /coupon:
 * post:
 * summary: Create a new discount coupon
 * tags: [Coupon]
 * security:
 * - bearerAuth: []
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * name: {type: string}
 * amount: {type: number, description: "Discount percentage (1-100)"}
 * expire: {type: string, format: date, description: "Expiry date YYYY-MM-DD"}
 */
const router = Router();

router.get("/", couponController.getCoupon);

router.post(
  "/",
  auth(endPoint.create),
  fileUpload(fileValidation.image).single("image"),
  validation(validators.createCoupon),
  couponController.createCoupon
);

router.put(
  "/:couponId",
  auth(endPoint.update),
  fileUpload(fileValidation.image).single("image"),
  validation(validators.updateCoupon),
  couponController.updateCoupon
);

export default router;
