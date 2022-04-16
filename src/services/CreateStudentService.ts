import { studentsRepository } from '@repositories/StudentsRepository'

interface StudentRequest {
  ra: string
  first_name: string
  last_name: string
  email: string
}

export class CreateStudentService {
  async execute({ ra, first_name, last_name, email }: StudentRequest) {
    if (!ra || !first_name || !last_name || !email) {
      throw new Error('Missing informations')
    }

    const studentAlreadyExists = await studentsRepository.findOne({
      where: {
        ra: ra,
      },
    })

    if (studentAlreadyExists) {
      throw new Error('Student already exists')
    }

    const student = studentsRepository.create({
      ra,
      first_name,
      last_name,
      email,
      status: 1,
    })

    await studentsRepository.save(student)

    return student
  }
}
