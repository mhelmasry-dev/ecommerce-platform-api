import { auth } from "../../middleware/auth.js";
import * as productcontroller from "./controller/product.js";
import reviews from "../reviews/review.router.js";
import { endpoint } from "./product.endPoint.js";
import { Router } from "express";
import { fileUpload, fileValidation } from "../../utils/multer.js";
/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products with Filters
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Success
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               mainImage:
 *                 type: string
 *                 format: binary
 *               subImages:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Created
 */
const router = Router();
router.use("/:productId/review", reviews);
router.post(
  "/",
  auth(endpoint.create),
  fileUpload(fileValidation.image).fields([
    { name: "mainImage", maxCount: 1 },
    { name: "subImages", maxCount: 5 },
  ]),
  productcontroller.createProduct
);

router.get("/", productcontroller.productList);
router.patch(
  "/:productId/wishlist",
  auth(endpoint.productList),
  productcontroller.addToWishList
);

router.delete(
  "/:productId/wishlist",
  auth(endpoint.productList),
  productcontroller.removeToWishList
);
export default router;
