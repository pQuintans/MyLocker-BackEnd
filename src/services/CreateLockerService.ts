import { lockersRepository } from '@repositories/LockersRepository'
import { sectionsRepository } from '@repositories/SectionsRepository'

interface SectionRequest {
  number: number
  is_rented?: number
  section_id: number
}

export class CreateLockerService {
  async execute({ number, is_rented = 0, section_id }: SectionRequest) {
    if (!number || !section_id) {
      throw new Error('Missing informations')
    }

    const lockerAlreadyExists = await lockersRepository.findOne({
      where: {
        number: number,
      },
    })

    if (lockerAlreadyExists) {
      throw new Error('Locker already exists')
    }

    const sectionExists = await sectionsRepository.findOne({
      where: {
        id: section_id,
      },
    })

    if (!sectionExists) {
      throw new Error('Section does not exist')
    }

    const locker = lockersRepository.create({
      number,
      is_rented,
      section_id,
      status: 1,
    })

    lockersRepository.save(locker)

    return locker
  }
}
