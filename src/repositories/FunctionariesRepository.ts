import AppDataSource from 'src/database/data-source'
import { Functionary } from '@entities/Functionary'

export const functionariesRepositores = AppDataSource.getRepository(Functionary)
