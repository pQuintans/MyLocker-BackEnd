import { FindLockerService } from '@services/FindLockersService'
import { Request, Response } from 'express'

export class FindLockersController {
  async handle(request: Request, response: Response) {
    const findLockerService = new FindLockerService()

    const lockers = await findLockerService.execute()

    return response.json(lockers)
  }
}
