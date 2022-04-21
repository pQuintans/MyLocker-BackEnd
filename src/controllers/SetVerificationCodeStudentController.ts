import { SetVerificationCodeStudentService } from '@services/SetVerificationCodeStudentService'
import { Request, Response } from 'express'

export class SetVerificationCodeStudentController {
  async handle(request: Request, response: Response) {
    const { ra, email } = request.body

    const setVerificationCodeStudentService =
      new SetVerificationCodeStudentService()

    const code = await setVerificationCodeStudentService.execute({
      ra,
      email,
    })

    return response.json(code)
  }
}
