import { Router } from "express";
const router = Router()

import {getAllJobs, createJob, getSingleJob, updateJob, deleteJob} from '../controllers/jobController.js'
import { validateIdParams, validateJobInput } from "../middleware/validationMiddleware.js";

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').patch(validateJobInput, validateIdParams,updateJob).get(validateIdParams,getSingleJob).delete(validateIdParams,deleteJob)

export default router