import { sectionsRepository } from '@repositories/SectionsRepository'

interface SectionRequest {
  color: string
  left_room: string
  right_room: string
}

export class CreateSectionService {
  async execute({ color, left_room, right_room }: SectionRequest) {
    if (!color || !left_room || !right_room) {
      throw new Error('Faltam informações')
    }

    const section = sectionsRepository.create({
      color,
      left_room,
      right_room,
      status: 1,
    })

    await sectionsRepository.save(section)

    return section
  }
}
