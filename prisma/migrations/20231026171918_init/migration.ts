import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function up() {
  await prisma.user.createMany({
    data: [
      {
        email: 'john.doe@example.com',
        password: 'password123',
        name: 'John Doe',
      },
      {
        email: 'jane.doe@example.com',
        password: 'password456',
        name: 'Jane Doe',
      },
    ],
  });

  await prisma.goal.createMany({
    data: [
      {
        title: 'Lose 10 pounds',
        description: 'Reduce my weight by 10 pounds in 3 months',
        target: '10 pounds',
        userId: 1,
      },
      {
        title: 'Run a 5K',
        description: 'Train for and complete a 5K race',
        target: '5 kilometers',
        userId: 2,
      },
    ],
  });

  await prisma.activity.createMany({
    data: [
      {
        title: 'Workout',
        description: 'Strength training session',
        progress: 20,
        goalId: 1,
      },
      {
        title: 'Run',
        description: '3-mile run',
        progress: 50,
        goalId: 2,
      },
    ],
  });
}

export async function down() {
  await prisma.activity.deleteMany();
  await prisma.goal.deleteMany();
  await prisma.user.deleteMany();
}