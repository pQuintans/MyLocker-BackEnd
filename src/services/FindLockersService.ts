import { lockersRepository } from '@repositories/LockersRepository'

export class FindLockerService {
  async execute() {
    const lockers = await lockersRepository.find()

    if (lockers.length == 0) {
      throw new Error('There is no lockers created')
    }

    return lockers
  }
}
