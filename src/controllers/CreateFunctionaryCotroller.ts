import { CreateFunctionaryService } from '@services/CreateFunctionaryService'
import { Request, Response } from 'express'

export class CreateFunctionaryController {
  async handle(request: Request, response: Response) {
    const { cpf, first_name, last_name, email, password } = request.body

    const createFunctionaryService = new CreateFunctionaryService()

    const functionary = await createFunctionaryService.execute({
      cpf,
      first_name,
      last_name,
      email,
      password,
    })

    return response.json(functionary)
  }
}
