import AppDataSource from '../database/data-source'
import { Student } from '@entities/Student'

export const studentsRepository = AppDataSource.getRepository(Student)
