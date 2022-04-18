import { FindFunctionaryService } from '@services/FindFunctionaryService'
import { Request, Response } from 'express'

export class FindFunctionaryController {
  async handle(request: Request, response: Response) {
    const { cpf } = request.params

    const findFunctionaryService = new FindFunctionaryService()

    const functionary = await findFunctionaryService.execute({
      cpf,
    })

    return response.json(functionary)
  }
}
