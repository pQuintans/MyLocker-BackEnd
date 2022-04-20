import { Router } from 'express'

import { CreateStudentController } from '@controllers/CreateStudentController'
import { UpdateStudentPasswordController } from '@controllers/UpdateStudentPasswordController'
import { FindStudentByEmailController } from '@controllers/FindStudentByEmailController'
import { SetVerificationCodeStudentController } from '@controllers/SetVerificationCodeStudentController'

import { CreateFunctionaryController } from '@controllers/CreateFunctionaryCotroller'
import { FindFunctionaryController } from '@controllers/FindFunctionaryController'

import { CreateSectionController } from '@controllers/CreateSectionController'
import { CreateLockerController } from '@controllers/CreateLockerController'
import { CreateApmController } from '@controllers/CreateApmController'

const router = Router()

const createStudentController = new CreateStudentController()
const createFunctionaryController = new CreateFunctionaryController()
const createSectionController = new CreateSectionController()
const findFunctionaryController = new FindFunctionaryController()
const createLockerController = new CreateLockerController()
const createApmController = new CreateApmController()
const findStudentByEmailController = new FindStudentByEmailController()
const setVerificationCodeStudentController =
  new SetVerificationCodeStudentController()

const updateStudentPasswordController = new UpdateStudentPasswordController()

router.post('/students', createStudentController.handle)
router.get('/students/:email', findStudentByEmailController.handle)
router.put('/students/set-password', updateStudentPasswordController.handle)
router.put(
  '/students/generate-code',
  setVerificationCodeStudentController.handle
)

router.post('/functionaries', createFunctionaryController.handle)
router.get('/functionaries/:cpf', findFunctionaryController.handle)

router.post('/sections', createSectionController.handle)

router.post('/lockers', createLockerController.handle)

router.post('/apms', createApmController.handle)

export { router }
