import { functionariesRepositores } from '@repositories/FunctionariesRepository'

interface FunctionaryRequest {
  cpf: string
}

export class FindFunctionaryService {
  async execute({ cpf }: FunctionaryRequest) {
    if (!cpf) {
      throw new Error('Missing informations')
    }

    const functionary = await functionariesRepositores.findOne({
      where: {
        cpf: cpf,
      },
    })

    if (!functionary) {
      throw new Error('Functionary does not exists')
    }

    return functionary
  }
}
