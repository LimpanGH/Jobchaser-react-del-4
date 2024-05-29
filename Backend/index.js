import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'securepassword',
      },
    });
    console.log('Created User:', newUser);

    // Save a news article for the created user
    const newArticle = await prisma.newsArticle.create({
      data: {
        title: 'Breaking News',
        content: 'Content of the breaking news.',
        author: 'Reporter',
        user: {
          connect: { id: newUser.id },
        },
      },
    });
    console.log('Created News Article:', newArticle);

    // Fetch the user along with their saved news articles
    const userWithArticles = await prisma.user.findUnique({
      where: { id: newUser.id },
      include: { savedNewsArticles: true },
    });
    console.log('User with Articles:', userWithArticles);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
