import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('section')
export class Section {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar')
  color: string

  @Column('varchar')
  left_room: string

  @Column('varchar')
  right_room: string

  @Column('tinyint')
  status: number
}
