import  express from "express";
import { usersignup,userLogin } from "../controller/userController.js";
import {getProducts,getProductById} from "../controller/product-controller.js";
import { orderPayment, orderVerify } from "../controller/payment-controller.js";
const router=express.Router();

router.post('/signup',usersignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.post('/orders',orderPayment);
router.post('/verify',orderVerify);
export default router;