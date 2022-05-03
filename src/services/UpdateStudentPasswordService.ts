import { studentsRepository } from '@repositories/StudentsRepository'
import { hash } from 'bcryptjs'

interface StudentRequest {
  ra: string
  password: string
}

export class UpdateStudentPasswordService {
  async execute({ ra, password }: StudentRequest) {
    if (!ra || !password) {
      throw new Error('Faltam informações')
    }

    const hashPassword = await hash(password, 8)

    const student = await studentsRepository.update(
      { ra },
      { password: hashPassword }
    )

    return { ...student, hashPassword }
  }
}
