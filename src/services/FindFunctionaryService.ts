import { functionariesRepositores } from '@repositories/FunctionariesRepository'

interface FunctionaryRequest {
  cpf: string
}

export class FindFunctionaryService {
  async execute({ cpf }: FunctionaryRequest) {
    if (!cpf) {
      throw new Error('Faltam informações')
    }

    const functionary = await functionariesRepositores.findOne({
      where: {
        cpf: cpf,
      },
    })

    if (!functionary) {
      throw new Error('Nenhum funcionário com este CPF encontrado')
    }

    return functionary
  }
}
