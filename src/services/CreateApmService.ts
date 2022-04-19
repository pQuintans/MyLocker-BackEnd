import { apmsRepository } from '@repositories/ApmsRepository'
import { studentsRepository } from '@repositories/StudentsRepository'

interface ApmRequest {
  is_paid?: number
  student_ra: string
}

export class CreateApmService {
  async execute({ is_paid = 0, student_ra }: ApmRequest) {
    if (!student_ra) {
      throw new Error('Missing informations')
    }

    const studentExists = await studentsRepository.findOne({
      where: {
        ra: student_ra,
      },
    })

    if (!studentExists) {
      throw new Error('Student does not exist')
    }

    const studentAlreadyHasApmThisYear = await apmsRepository.findOne({
      where: {
        student_ra: student_ra,
        status: 1,
      },
    })

    if (studentAlreadyHasApmThisYear) {
      throw new Error('Student already contribute this year')
    }

    const apm = apmsRepository.create({
      is_paid,
      student_ra,
      status: 1,
    })

    apmsRepository.save(apm)

    return apm
  }
}
