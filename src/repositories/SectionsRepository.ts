import { Section } from '@entities/Section'
import AppDataSource from '../database/data-source'

export const sectionsRepository = AppDataSource.getRepository(Section)
