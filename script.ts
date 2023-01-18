import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // usuwa wszystko 
  // await prisma.user.deleteMany()
  // create many  , ale nie można uzywac slect
  // const userMany = await prisma.user.createMany({
  //   data: [{
  //     name: 'Yuli',
  //     email: 'prisma@prisma.pl',
  //     age: 29,
  //   },
  //   {
  //     name: 'Yuli1',
  //     email: 'prisma@prismaT.pl',
  //     age: 29,
  //   },
  //   {
  //     name: 'Yuli2',
  //     email: 'prisma@prismaS.pl',
  //     age: 29,
  //   },

  // ]
  // })
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Yuli',
  //     email: 'prisma@prisma.pl',
  //     age: 29,
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   include: {
  //     userPreference: true,
  //   },
  //   // select:{
  //   //   name:true,
  //   //   userPreference:{select:{id:true}}
  //   // } wysyla tylko wybarane
  // })
  // console.log(user)
  //// read unikalny klucz
  // const userRead = await prisma.user.findUnique({where:{email:"prisma@prisma.pl"}})
  // const userRead = await prisma.user.findUnique({where:{age_name:{age:29,name:"Yuli"}}})
  // const userRead = await prisma.user.findFirst({where:{name:"Yuli"}}) wyszuka co pierwwsze na potka
  // znalezienie wiele
  // const userRead = await prisma.user.findMany({
  //   where: { name: 'Yuli' },
  //   // sortowanie
  //   orderBy: {
  //     age: 'asc',
  //   },
  //   // paginacja
  //   take: 2,

  //   // pomijanie  pierwszej
  //   skip: 1,
  // })
  // const userRead = await prisma.user.findMany({
  // wyszuka osoby które maja inne imię
  //   where:{name:{not:"Yuli"}},
  // })
  // const userRead = await prisma.user.findMany({
  // wyszuka tylko te imiona
  //   where:{name:{in:"Yuli","Kyle"
  // mniej niz 20
  // age:{lt:20}
  // sprawdza czy zawiera taki tekst
  // email:{contains:"@test.com"}
  // sprawdza czy tekst sie konczy sie taką koncówką
  // email:{endsWith:"@test.com"}
  // sprawdza czy się tekst zaczyna na takie literki
  // email:{startsWith:"yuli"}
  // }}
  // sprawdzxa dwa parametry
  // where {
  //   AND:[{email:{startWith:"yuli"}},{name:"Yuli"}]
  //  AND:[{email:{startWith:"yuli"}},{email:{endsWith:"test@test.pl"}}]
  // }
  // sprawdza lub
  // where {
  //   OR:[{email:{startWith:"yuli"}},{name:"Yuli"}]
  //  OR:[{email:{startWith:"yuli"}},{email:{endsWith:"test@test.pl"}}]
  // }
  // })

  // zczytywanie relacji

  // const userRead = await prisma.user.findMany({
  //   where: {
  //     writtenPosts:{
  //       // każdy parametr co zawiera title Test
  //       // every:{
  //       //   title:"Test"
  //       // }
  //       // każdy post co nie zawie  test
  //       // none:{
  //       //   title:"Test"
  //       // }
  //       // każdy post
  //       // some:{
  //       //   title:"Test"
  //       // }

  //     }
  //    }
  // })

  // update jeden updateMany dziiała tak samo
//   const userRead = await prisma.user.update({
//     // where: {
//     //   email: 'prisma@test.pl',
//     // },
//     // data: {
//     //   email: 'prisma@test.pl',
//     // },
//     where: {
//       email: 'prisma@test.pl',
//     },
//     // zwiększa o 1
//     data: {
//       age: { increment: 1 },
//     },
//   })
// }
// usuwanie jeden 
// await prisma.user.delete({
// where:{
//   email: 'prisma@test.pl',
// }
// })
// usuwa wszystkie co maja parametry
// await prisma.user.delete({
// where:{
//   age:{gt:20},
// }
// })

main()
  .catch(err => {
    console.log(err)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
