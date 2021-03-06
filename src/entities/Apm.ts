import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Student } from './Student'

@Entity('apm')
export class Apm {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('tinyint')
  is_paid: number

  @Column('varchar')
  student_ra: string

  @JoinColumn({ name: 'student_ra' })
  @ManyToOne(() => Student)
  sectionId: Student

  @Column('tinyint')
  status: number
}
