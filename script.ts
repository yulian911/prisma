import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({ data: { name: 'Anna' } });
  console.log(user);
}

main()
  .catch(err => {
    console.log(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
