import { Router } from 'express'

import { CreateStudentController } from '@controllers/CreateStudentController'
import { UpdateStudentPasswordController } from '@controllers/UpdateStudentPasswordController'

const router = Router()

const createStudentController = new CreateStudentController()
const updateStudentPasswordController = new UpdateStudentPasswordController()

router.post('/students', createStudentController.handle)
router.put('/students/set-password', updateStudentPasswordController.handle)

export { router }
