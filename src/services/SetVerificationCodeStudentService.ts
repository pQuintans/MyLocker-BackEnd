import { studentsRepository } from '@repositories/StudentsRepository'
import randomstring from 'randomstring'

interface VerificationCodeRequest {
  ra: string
}

export class SetVerificationCodeStudentService {
  async execute({ ra }: VerificationCodeRequest) {
    const randomCode = randomstring.generate(6)

    const student = await studentsRepository.update(
      { ra },
      { code: randomCode }
    )

    return student
  }
}
