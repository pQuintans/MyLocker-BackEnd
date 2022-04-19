import { Entity, Column, PrimaryColumn, JoinColumn, ManyToMany } from 'typeorm'
import { Locker } from './Locker'

@Entity('student')
export class Student {
  @PrimaryColumn()
  ra: string

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  code: string

  @Column()
  locker_number: number

  @JoinColumn({ name: 'locker_number' })
  @ManyToMany(() => Locker)
  lockerNumber: Locker

  @Column()
  status: number
}
