import { Router } from 'express'

import { CreateStudentController } from '@controllers/CreateStudentController'
import { UpdateStudentPasswordController } from '@controllers/UpdateStudentPasswordController'

import { CreateFunctionaryController } from '@controllers/CreateFunctionaryCotroller'
import { FindFunctionaryController } from '@controllers/FindFunctionaryController'

import { CreateSectionController } from '@controllers/CreateSectionController'

const router = Router()

const createStudentController = new CreateStudentController()
const createFunctionaryController = new CreateFunctionaryController()
const createSectionController = new CreateSectionController()
const findFunctionaryController = new FindFunctionaryController()

const updateStudentPasswordController = new UpdateStudentPasswordController()

router.post('/students', createStudentController.handle)
router.post('/functionaries', createFunctionaryController.handle)
router.get('/functionaries/:cpf', findFunctionaryController.handle)
router.post('/sections', createSectionController.handle)
router.put('/students/set-password', updateStudentPasswordController.handle)

export { router }
