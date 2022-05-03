import { lockersRepository } from '@repositories/LockersRepository'
import { instanceToPlain } from 'class-transformer'

export class ListLockerService {
  async execute() {
    const lockers = await lockersRepository.find({
      relations: ['section'],
    })

    if (lockers.length == 0) {
      throw new Error('Nenhum armário cadastrado')
    }

    return instanceToPlain(lockers)
  }
}
