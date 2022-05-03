import { studentsRepository } from '@repositories/StudentsRepository'

export class SetProfilePictureStudentService {
  async execute(ra: string, url: string) {
    if (!ra || !url) {
      throw new Error('Faltam informações')
    }

    const update = await studentsRepository.update(
      { ra },
      { profile_picture_url: url }
    )

    return update
  }
}
