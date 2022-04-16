import { CreateStudentService } from '@services/CreateStudentService'
import { Request, Response } from 'express'

export class CreateStudentController {
  async handle(request: Request, response: Response) {
    const { ra, first_name, last_name, email } = request.body

    const createStudentService = new CreateStudentService()

    const student = await createStudentService.execute({
      ra,
      first_name,
      last_name,
      email,
    })

    return response.json(student)
  }
}
