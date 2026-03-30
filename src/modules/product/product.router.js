import { auth } from "../../middleware/auth.js";
import * as productcontroller from "./controller/product.js";
import reviews from "../reviews/review.router.js";
import { endpoint } from "./product.endPoint.js";
import { Router } from "express";
import { fileUpload, fileValidation } from "../../utils/multer.js";
/**
 * @swagger
 * tags:
 * name: Product
 * description: Product management and Catalog
 */

/**
 * @swagger
 * /product:
 * get:
 * summary: Get all products with Filters (Search, Pagination, Sort)
 * tags: [Product]
 * parameters:
 * - in: query
 * name: page
 * schema: {type: integer}
 * - in: query
 * name: search
 * schema: {type: string}
 * responses:
 * 200:
 * description: List of products
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
