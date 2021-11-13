import { PrismaClient } from '.prisma/client';

const client = new PrismaClient();

class Seeder {
  async seedUser() {
    const user = await client.user.create({
      data: {
        name: ' Chutchapon Soyklum',
        email: 'chutchapon.soyklum@hotmail..com',
        password: '123456',
        Role: 'ADMIN',
      },
    });
    console.log('User created', user);
  }
}

new Seeder().seedUser();
