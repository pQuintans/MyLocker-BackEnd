import { DataSource } from 'typeorm'
import 'dotenv/config'

import { Apm } from '@entities/Apm'
import { Functionary } from '@entities/Functionary'
import { Locker } from '@entities/Locker'
import { Section } from '@entities/Section'
import { Student } from '@entities/Student'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Apm, Functionary, Locker, Section, Student],
  migrations: ['{dist, src}/database/migrations/*'],
})

export default AppDataSource
