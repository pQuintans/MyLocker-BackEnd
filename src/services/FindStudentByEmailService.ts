import { studentsRepository } from '@repositories/StudentsRepository'

interface EmailLoginRequest {
  email: string
}

export class FindStudentByEmailService {
  async execute({ email }: EmailLoginRequest) {
    const student = await studentsRepository.findOne({
      where: {
        email: email,
      },
    })

    if (!student) {
      throw new Error('User does not exists')
    }

    return student
  }
}
