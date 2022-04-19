import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Section } from './Section'

@Entity('locker')
export class Locker {
  @PrimaryColumn()
  number: number

  @Column()
  is_rented: number

  @Column()
  section_id: number

  @JoinColumn({ name: 'section_id' })
  @ManyToOne(() => Section)
  sectionId: Section

  @Column()
  status: number
}
