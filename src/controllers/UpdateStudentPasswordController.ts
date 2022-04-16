import { UpdateStudentPasswordService } from '@services/UpdateStudentPasswordService'
import { Request, Response } from 'express'

export class UpdateStudentPasswordController {
  async handle(request: Request, response: Response) {
    const { ra, password } = request.body

    const updateStudentPasswordService = new UpdateStudentPasswordService()

    const student = await updateStudentPasswordService.execute({
      ra,
      password,
    })

    return response.json(student)
  }
}
