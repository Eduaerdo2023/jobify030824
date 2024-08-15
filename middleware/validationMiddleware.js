import { body, param, validationResult } from 'express-validator'
import { BadRequestError, NotFoundError } from '../errors/customErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/Constants.js'
import mongoose from 'mongoose'
import Job from '../models/JobModel.js'
import User from '../models/UserModel.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg)
        throw new BadRequestError(errorMessages)
      }
      next()
    }

  ]
}

export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage('company is required'),
  body('position').notEmpty().withMessage('position is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('invalid status value'),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('invalid job type')
])

export const validateIdParams = withValidationErrors([
  param('id').
    custom(async (value) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value)
      if (!isValidId) throw new Error('invalid MongoDB id')
      const job = await Job.findById(value)
      if (!job) throw new NotFoundError(`no job with id ${value}`)
    }),
])

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('company is required'),
  body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(async(email)=> {
    const user = await User.findOne({ email })
    if(user) {
      throw new Error('email already exists')
    }
  }),
  body('password').notEmpty().withMessage('password is required').isLength({min: 5, max:20}).withMessage('password must between  6 and 19 characters '),
  body('lastName').notEmpty().withMessage('last name  is required'),
  
])
