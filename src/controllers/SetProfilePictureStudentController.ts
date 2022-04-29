import { SetProfilePictureStudentService } from '@services/SetProfilePictureStudentService'
import { Request, Response } from 'express'

const url = 'https://mylocker-backend.herokuapp.com/'

export class SetProfilePictureStudentController {
  async handle(request: Request, response: Response) {
    const { ra } = request.body
    const setProfilePictureStudentService =
      new SetProfilePictureStudentService()

    const res = await setProfilePictureStudentService.execute(
      ra,
      url + request.file.filename
    )

    return response.json({
      profile_url: url + request.file.filename,
      res,
    })
  }
}
