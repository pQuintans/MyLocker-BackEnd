import { SetProfilePictureStudentService } from '@services/SetProfilePictureStudentService'
import { Request, Response } from 'express'

export class SetProfilePictureStudentController {
  async handle(request: Request, response: Response) {
    const { ra } = request.body
    const setProfilePictureStudentService =
      new SetProfilePictureStudentService()

    const res = await setProfilePictureStudentService.execute(
      ra,
      `http://localhost:3333/profile-picture/${request.file.filename}`
    )

    return response.json({
      profile_url: `http://localhost:3333/profile-picture/${request.file.filename}`,
      res,
    })
  }
}
