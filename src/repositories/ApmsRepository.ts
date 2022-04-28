import { Apm } from '@entities/Apm'
import AppDataSource from '../database/data-source'

export const apmsRepository = AppDataSource.getRepository(Apm)
