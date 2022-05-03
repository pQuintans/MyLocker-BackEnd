import { studentsRepository } from '@repositories/StudentsRepository'

interface EmailLoginRequest {
  email: string
}

export class FindStudentByEmailService {
  async execute({ email }: EmailLoginRequest) {
    if (!email) {
      throw new Error('Faltam informações')
    }

    const student = await studentsRepository.findOne({
      where: {
        email: email,
      },
    })

    if (!student) {
      throw new Error('Nenhum aluno com este RA encontrado')
    }

    return student
  }
}
