import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Exclude } from 'class-transformer'
import { Section } from './Section'

@Entity('locker')
export class Locker {
  @PrimaryColumn('int')
  number: number

  @Column('tinyint')
  is_rented: number

  @Exclude()
  @Column('int')
  section_id: number

  @JoinColumn({ name: 'section_id' })
  @ManyToOne(() => Section)
  section: Section

  @Column('tinyint')
  status: number
}
