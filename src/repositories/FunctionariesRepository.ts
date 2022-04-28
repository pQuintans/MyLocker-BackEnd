import AppDataSource from '../database/data-source'
import { Functionary } from '@entities/Functionary'

export const functionariesRepositores = AppDataSource.getRepository(Functionary)
