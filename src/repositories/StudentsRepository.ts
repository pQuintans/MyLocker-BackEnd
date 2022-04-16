import AppDataSource from 'src/database/data-source'
import { Student } from '@entities/Student'

export const studentsRepository = AppDataSource.getRepository(Student)
