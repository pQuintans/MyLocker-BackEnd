import { Entity, Column, PrimaryColumn, JoinColumn, ManyToMany } from 'typeorm'
import { Locker } from './Locker'

@Entity('student')
export class Student {
  @PrimaryColumn('varchar')
  ra: string

  @Column('varchar')
  first_name: string

  @Column('varchar')
  last_name: string

  @Column('varchar')
  email: string

  @Column('varchar')
  profile_picture_url: string

  @Column('varchar')
  password: string

  @Column('varchar')
  code: string

  @Column('int')
  locker_number: number

  @JoinColumn({ name: 'locker_number' })
  @ManyToMany(() => Locker)
  lockerNumber: Locker

  @Column('tinyint')
  status: number
}
