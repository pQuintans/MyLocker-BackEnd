import { PrimaryColumn, Column, Entity } from 'typeorm'

@Entity('functionary')
export class Functionary {
  @PrimaryColumn()
  cpf: string

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  status: number
}
