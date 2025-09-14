import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function others() {
  // create or insert many users data
  //   const createManyUser = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Rahman",
  //         email: "marahman@gmail.com",
  //       },
  //       {
  //         name: "Monin",
  //         email: "monin@gmail.com",
  //       },
  //       {
  //         name: "Shuvo",
  //         email: "shuvo@gmail.com",
  //       },
  //       {
  //         name: "Ruhul",
  //         email: "ruhul@gmail.com",
  //       },
  //     ],
  //   });

  //   const createManyUser = await prisma.user.createManyAndReturn({
  //     data: [
  //       {
  //         name: "Firoz",
  //         email: "firoz@gmail.com",
  //       },
  //       {
  //         name: "Mir",
  //         email: "mir@gmail.com",
  //       },
  //     ],
  //   });

  //   console.log(createManyUser);

  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: "mi", // case sensitive
        mode: "insensitive",
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  console.log(users);

  //
}

others();
