import { sectionsRepository } from '@repositories/SectionsRepository'

interface SectionRequest {
  color: string
  left_room: string
  right_room: string
}

export class CreateSectionService {
  async execute({ color, left_room, right_room }: SectionRequest) {
    if (!color || !left_room || !right_room) {
      throw new Error('Missing informations')
    }

    const sectionsAlreadyExists = await sectionsRepository.findOne({
      where: {
        color: color,
      },
    })

    if (sectionsAlreadyExists) {
      throw new Error('Student already exists')
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
