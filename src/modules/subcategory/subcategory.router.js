import * as subcategoryController from "./controller/subcategory.js";
import * as validators from "./subcategory.validation.js";
import { validation } from "../../middleware/validation.js";
import { fileUpload, fileValidation } from "../../utils/multer.js";
import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { endPoint } from "./subcategory.endPoint.js";
/**
 * @swagger
 * /subCategory:
 *   post:
 *     summary: Create a new sub-category
 *     tags: [SubCategory]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Created
 *   get:
 *     summary: Get all sub-categories
 *     tags: [SubCategory]
 *     responses:
 *       200:
 *         description: Success
 */
const router = Router({ mergeParams: true, caseSensitive: true });

router.get("/", subcategoryController.getSubcategory);
router.post(
  "/",
  auth(endPoint.create),
  fileUpload(fileValidation.image).single("image"),
  validation(validators.createSubcategory),
  subcategoryController.createSubcategory
);

router.put(
  "/:subcategoryId",
  auth(endPoint.update),
  fileUpload(fileValidation.image).single("image"),
  validation(validators.updateSubcategory),
  subcategoryController.updateSubcategory
);

export default router;
