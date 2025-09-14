import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Najrul Islam",
  //     email: "narjul@gmail.com",
  //     profilePhoto: "http://najrl_profile.com",
  //   },
  // });
  // console.log(result);
  // const getUsers = await prisma.user.findMany();
  // console.log(getUsers);
  // const getSingleUser = await prisma.user.findUniqueOrThrow({
  //   where: {
  //     id: 6,
  //   },
  // });
  // console.log(getSingleUser);
  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Alex Zander Abraham",
  //   },
  // });
  // console.log(updatedUser);
  // const updateUserProfile = await prisma.user.updateMany({
  //   where: {
  //     profilePhoto: null
  //   },
  //   data: {
  //     profilePhoto: "http://default.com"
  //   }
  // });
  // console.log(updateUserProfile);
  // const updateUserProfile = await prisma.user.updateManyAndReturn({
  //   where: {
  //     profilePhoto: null,
  //   },
  //   data: {
  //     profilePhoto: "http://default.com",
  //   },
  // });
  // console.log(updateUserProfile);

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 6,
  //   },
  // });

  // console.log(deleteUser);

  // console.log(await prisma.user.findMany());

  const deleteManyUser = await prisma.user.deleteMany({
    where: {
      id: {
        lt: 3,
      },
    },
  });

  console.log(deleteManyUser);
}

main();
