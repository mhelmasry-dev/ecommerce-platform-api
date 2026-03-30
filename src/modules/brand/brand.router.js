
import * as brandController from './controller/brand.js'
import * as validators from './brand.validation.js'
import { validation } from '../../middleware/validation.js';
import { fileUpload, fileValidation } from '../../utils/multer.js'
import { Router } from "express";
import { endPoint } from './brandendPoint.js';
import { auth } from '../../middleware/auth.js';
/**
 * @swagger
 * tags:
 * name: Brand
 * description: Management of product brands and logos
 */

/**
 * @swagger
 * /brand:
 * get:
 * summary: List all available brands
 * tags: [Brand]
 * post:
 * summary: Add a new brand
 * tags: [Brand]
 * security:
 * - bearerAuth: []
 * requestBody:
 * content:
 * multipart/form-data:
 * schema:
 * type: object
 * properties:
 * name: {type: string}
 * image: {type: string, format: binary}
 */
const router = Router()

router.get("/",
   brandController.getBrand
)

router.post("/",
   auth(endPoint.create),
   fileUpload(fileValidation.image).single('image'),
   validation(validators.createBrand),
   brandController.createBrand
)



router.put("/:brandId",
   auth(endPoint.update),
   fileUpload(fileValidation.image).single('image'),
   validation(validators.updateBrand),
   brandController.updateBrand
)

export default router