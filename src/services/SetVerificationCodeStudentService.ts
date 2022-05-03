import { studentsRepository } from '@repositories/StudentsRepository'
import randomstring from 'randomstring'
import nodemailer from 'nodemailer'
import 'dotenv/config'
interface VerificationCodeRequest {
  ra: string
  email: string
}

export class SetVerificationCodeStudentService {
  async execute({ ra, email }: VerificationCodeRequest) {
    if (!ra || !email) {
      throw new Error('Faltam informações')
    }

    const randomCode = randomstring.generate(6)

    await studentsRepository.update({ ra }, { code: randomCode })

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'mylocker.contato@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    transporter
      .sendMail({
        from: '"My Locker" <mylocker.contato@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Código de verificação', // Subject line
        text: `Seu código de verificação é ${randomCode}`, // plain text body
        html: `Seu código de verificação é <b>${randomCode}</b>`, // html body
      })
      .catch(console.error)

    return randomCode
  }
}
