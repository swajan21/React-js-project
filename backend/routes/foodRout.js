import express from 'express'
import { addFood } from '../controllers/foodController.js'
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,res,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post('/add',upload.single('image'),addFood)






export default foodRouter;