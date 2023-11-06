const prisma = require("../prisma");
const seed = async (numUsers = 15, postPerUser = 3) => {
  for (let i = 0; i < numUsers; i++) {
    const posts = [];

    for (let j = 0; j < postPerUser; j++) {
      posts.push({ title: `Post ${i}${j}`, content: `Content ${i}` });
    }
 

  await prisma.user.create({
    data: {
      username: `User ${i} `,
      password: `123`,
      posts: {
        create: posts,
      },
    },
  });
   }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
