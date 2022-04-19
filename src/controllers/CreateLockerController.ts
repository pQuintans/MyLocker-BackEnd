import { CreateLockerService } from '@services/CreateLockerService'
import { Request, Response } from 'express'

export class CreateLockerController {
  async handle(request: Request, response: Response) {
    const { number, is_rented, section_id } = request.body

    const createLockerService = new CreateLockerService()

    const locker = await createLockerService.execute({
      number,
      is_rented,
      section_id,
    })

    return response.json(locker)
  }
}
