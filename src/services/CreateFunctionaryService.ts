import { functionariesRepositores } from '@repositories/FunctionariesRepository'
import { hash } from 'bcryptjs'

interface FunctionaryRequest {
  cpf: string
  first_name: string
  last_name: string
  email: string
  password: string
}

export class CreateFunctionaryService {
  async execute({
    cpf,
    first_name,
    last_name,
    email,
    password,
  }: FunctionaryRequest) {
    if (!cpf || !first_name || !last_name || !email || !password) {
      throw new Error('Missing informations')
    }

    const functionaryAlreadyExists = await functionariesRepositores.findOne({
      where: {
        cpf: cpf,
      },
    })

    if (functionaryAlreadyExists) {
      throw new Error('Funcionary already exists')
    }

    const passwordHash = await hash(password, 8)

    const functionary = functionariesRepositores.create({
      cpf,
      first_name,
      last_name,
      email,
      password: passwordHash,
      status: 1,
    })

    await functionariesRepositores.save(functionary)

    return functionary
  }
}
