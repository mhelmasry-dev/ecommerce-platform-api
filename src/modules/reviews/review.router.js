import * as reviewController from "./controller/review.js";
import { Router } from "express";
import endpoint from "./review.endpoint.js";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import * as validators from './review.validation.js'
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
