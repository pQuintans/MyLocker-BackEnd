import { SetVerificationCodeStudentService } from '@services/SetVerificationCodeStudentService'
import { Request, Response } from 'express'

export class SetVerificationCodeStudentController {
  async handle(request: Request, response: Response) {
    const { ra } = request.body

    const setVerificationCodeStudentService =
      new SetVerificationCodeStudentService()

    const student = await setVerificationCodeStudentService.execute({
      ra,
    })

    return response.json(student)
  }
}
