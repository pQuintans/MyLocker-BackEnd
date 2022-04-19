import { Locker } from '@entities/Locker'
import AppDataSource from 'src/database/data-source'

export const lockersRepository = AppDataSource.getRepository(Locker)
