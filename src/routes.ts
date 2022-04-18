import { Router } from 'express'

import { CreateStudentController } from '@controllers/CreateStudentController'
import { CreateFunctionaryController } from '@controllers/CreateFunctionaryCotroller'
import { CreateSectionController } from '@controllers/CreateSectionController'

import { UpdateStudentPasswordController } from '@controllers/UpdateStudentPasswordController'

const router = Router()

const createStudentController = new CreateStudentController()
const createFunctionaryController = new CreateFunctionaryController()
const createSectionController = new CreateSectionController()

const updateStudentPasswordController = new UpdateStudentPasswordController()

router.post('/students', createStudentController.handle)
router.post('/functionaries', createFunctionaryController.handle)
router.post('/sections', createSectionController.handle)
router.put('/students/set-password', updateStudentPasswordController.handle)

export { router }
