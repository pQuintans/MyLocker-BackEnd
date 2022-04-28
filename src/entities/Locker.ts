import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Section } from './Section'

@Entity('locker')
export class Locker {
  @PrimaryColumn('int')
  number: number

  @Column('tinyint')
  is_rented: number

  @Column('int')
  section_id: number

  @JoinColumn({ name: 'section_id' })
  @ManyToOne(() => Section)
  sectionId: Section

  @Column('tinyint')
  status: number
}
