import type { FastifyInstance } from 'fastify'
import Fastify from 'fastify'
import { fastify as f } from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { chatGpt } from './components/chatGpt'

const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastify()
const server = f()

async function kusa() {
  ;(async () => {
    await fastify.register(cors, {})

    fastify.post('/data', (req, reply) => {
      const data = req.body as {
        mail: string
        password: string
        //name: string
        faculty: string
      }
      console.log(data)
      const fmail: string = data.mail
      const fpassword: string = data.password
      //const fname: string = data.name
      const ffaculty: string = data.faculty
      console.log('postで受け取ることはできた')
      return main(fmail, fpassword, ffaculty, data)
    })

    //テキストを受け取りchatGPTAPIに投げる
    fastify.post('/text', async (req, reply) => {
      const text = req.body as {
        InputText: string
      }
      console.log(text.InputText)
      const answer = await chatGpt(text.InputText)
      if (answer) {
        console.log(answer)
        //await returnText(answer)
        console.log(5)
      }
      console.log(typeof answer)
      reply.send(answer)
    })
    await fastify.listen({ port: 8080 })
    console.log(`Server listening at ${8080}`)
  })()

  //return main()
}

/*
async function returnText(answer: string) {
  fastify.get('/text', (req, reply) => {
    console.log('getできた')
    return answer
  })
}
*/

async function main(
  fmail: string,
  fpassword: string,
  //fname: string,
  ffaculty: string,
  data: any
) {
  const result = await prisma.user.create({
    data: {
      mail: fmail,
      //name: fname,
      password: fpassword,
      faculty: ffaculty,
    },
  })
  console.log(result)
  console.log('mainは回った')
  //return response()
}

kusa()
  .catch((e) => console.error(e))
  .finally(async () => {
    console.log('これでもう終わる！')
    await prisma.$disconnect()
  })
