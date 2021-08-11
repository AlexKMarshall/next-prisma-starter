import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

console.log('importing seed file')

export async function seed() {
  console.log('generating seeds...') // This isn't being called
  const newPost = await prisma.post.create({
    data: {
      title: 'My seeded post',
    },
  })

  console.log('seeded ', newPost)
}
