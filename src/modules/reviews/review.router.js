import * as reviewController from "./controller/review.js";
import { Router } from "express";
import endpoint from "./review.endpoint.js";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import * as validators from './review.validation.js'
/**
 * @swagger
 * tags:
 * name: Review
 * description: Product reviews and ratings
 */

/**
 * @swagger
 * /product/{productId}/review:
 * post:
 * summary: Add a review to a product
 * tags: [Review]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: productId
 * required: true
 * schema: {type: string}
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * comment: {type: string}
 * rating: {type: number, minimum: 1, maximum: 5}
 */
const router = Router({ mergeParams: true });

router.post(
  "/:productId",
  auth(endpoint.create),
  validation(validators.createReview),
  reviewController.createReview
);

router.put(
  "/:reviewId",
  auth(endpoint.update),
  validation(validators.updateReview),
  reviewController.updateReview
);
export default router;
