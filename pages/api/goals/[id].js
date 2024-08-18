import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { id } = req.query;

  try {
    const goal = await prisma.goal.findUnique({
      where: {
        id: parseInt(id as string),
        userId: session.user.id,
      },
      include: {
        activities: true,
      },
    });

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    res.status(200).json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}