import { FindStudentByEmailService } from '@services/FindStudentByEmailService'
import { Request, Response } from 'express'

export class FindStudentByEmailController {
  async handle(request: Request, response: Response) {
    const { email } = request.params

    const findStudentByEmailService = new FindStudentByEmailService()

    const student = await findStudentByEmailService.execute({ email })

    return response.json(student)
  }
}
