import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Section {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  color: string

  @Column()
  left_room: string

  @Column()
  right_room: string

  @Column()
  status: number
}
