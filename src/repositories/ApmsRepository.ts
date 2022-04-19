import { Apm } from '@entities/Apm'
import AppDataSource from 'src/database/data-source'

export const apmsRepository = AppDataSource.getRepository(Apm)
