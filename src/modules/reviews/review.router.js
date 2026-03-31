import * as reviewController from "./controller/review.js";
import { Router } from "express";
import endpoint from "./review.endpoint.js";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import * as validators from "./review.validation.js";
const router = Router({ mergeParams: true });
/**
 * @swagger
 * tags:
 *   - name: Review
 *     description: Product reviews management
 */

/**
 * @swagger
 * /review/{productId}:
 *   post:
 *     summary: Create a new review
 *     tags: [Review]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *               rating:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *
 * /review/{reviewId}:
 *   put:
 *     summary: Update a review
 *     tags: [Review]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *               rating:
 *                 type: number
 *     responses:
 *       200:
 *         description: Success
 */
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
