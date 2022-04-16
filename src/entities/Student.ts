import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('students')
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
  status: number
}
