import { PrimaryColumn, Column, Entity } from 'typeorm'

@Entity('functionary')
export class Functionary {
  @PrimaryColumn('varchar')
  cpf: string

  @Column('varchar')
  first_name: string

  @Column('varchar')
  last_name: string

  @Column('varchar')
  email: string

  @Column('varchar')
  password: string

  @Column('tinyint')
  status: number
}
