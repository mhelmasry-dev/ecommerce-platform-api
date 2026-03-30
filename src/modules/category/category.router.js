// import subcategoryRouter from '../subcategory/subcategory.router.js'
import * as categoryController from "./controller/category.js";
import * as validators from "./category.validation.js";
import { validation } from "../../middleware/validation.js";
import { fileUpload, fileValidation } from "../../utils/multer.js";
import { Router } from "express";
import { auth, roles } from "../../middleware/auth.js";
import { endPoint } from "./category.endPoint.js";
import  subcategoryRouter from "../subcategory/subcategory.router.js";
/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get all categories with subcategories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Success
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
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
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Created
 */
const router = Router({ mergeParams:true,caseSensitive: true });
router.use("/:categoryId/subcategory", subcategoryRouter);

router.get("/", categoryController.getCategory);

router.post(
  "/",
  auth(endPoint.create),
  fileUpload(fileValidation.image).single("image"),
  validation(validators.createCategory),
  categoryController.createCategory
);

router.put(
  "/:categoryId",
  auth(endPoint.update),
  fileUpload(fileValidation.image).single("image"),
  validation(validators.updateCategory),
  categoryController.updateCategory
);

export default router;
