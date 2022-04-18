import { Section } from '@entities/Section'
import AppDataSource from 'src/database/data-source'

export const sectionsRepository = AppDataSource.getRepository(Section)
