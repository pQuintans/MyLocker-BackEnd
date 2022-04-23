import { studentsRepository } from '@repositories/StudentsRepository'

export class SetProfilePictureStudentService {
  async execute(ra: string, url: string) {
    if (!ra || !url) {
      throw new Error('Missing informations')
    }

    const update = await studentsRepository.update(
      { ra },
      { profile_picture_url: url }
    )

    return update
  }
}
