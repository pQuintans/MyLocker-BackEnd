import { CreateSectionService } from '@services/CreateSectionService'
import { Request, Response } from 'express'

export class CreateSectionController {
  async handle(request: Request, response: Response) {
    const { color, left_room, right_room } = request.body

    const createSectionService = new CreateSectionService()

    const section = await createSectionService.execute({
      color,
      left_room,
      right_room,
    })

    return response.json(section)
  }
}
