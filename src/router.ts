import {Router} from 'express'
import {body,validationResult} from 'express-validator'
import { handleInputError } from './modules/middleware';
import { createProduct, deleteProduct, getOneproduct, getProducts } from './handlers/products';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
const router =Router()

// A Router in the a sub-part of express.


//Routes for Product 
router.get("/product",getProducts);
router.get('/product/:id',getOneproduct)
router.put('/product/:id',body('name').isString(), handleInputError )
router.post('/product/',body('name').isString(), handleInputError ,createProduct)
router.delete('/product/:id',deleteProduct)

/**
 * Update
 */


router.get('/update',getUpdates) 
router.get('/update/:id',getOneUpdate)
router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional(),
  updateUpdate)
router.post('/update/',
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),
  createUpdate)
router.delete('/update/:id',deleteUpdate)

/**
 * Update Point
 */
router.get('/updatepoint',()=>{

})

router.get('/updatepoint/:id',()=>{})
router.put('/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  ()=>{

  })
router.post('/updatepoint/',()=>{})
router.delete('/updatepoint/:id',()=>{})

router.use((err,req,res,next)=>{
  console.log(err)
  res.json({mesage: 'in the router err'})
})
export default router