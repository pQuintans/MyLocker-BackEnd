import { CreateApmService } from '@services/CreateApmService'
import { Request, Response } from 'express'

export class CreateApmController {
  async handle(request: Request, response: Response) {
    const { is_paid, student_ra } = request.body

    const createApmService = new CreateApmService()

    const apm = await createApmService.execute({
      is_paid,
      student_ra,
    })

    return response.json(apm)
  }
}
