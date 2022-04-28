import { Locker } from '@entities/Locker'
import AppDataSource from '../database/data-source'

export const lockersRepository = AppDataSource.getRepository(Locker)
