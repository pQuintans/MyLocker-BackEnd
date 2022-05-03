import { ListLockerService } from '@services/ListLockersService'
import { Request, Response } from 'express'

export class ListLockersController {
  async handle(request: Request, response: Response) {
    const listLockerService = new ListLockerService()

    const lockers = await listLockerService.execute()

    return response.json(lockers)
  }
}
