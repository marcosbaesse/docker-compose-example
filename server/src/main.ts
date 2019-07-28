import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitMQServer } from './rabbitmq-server';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new RabbitMQServer(`amqp://${process.env.RABBITMQ_HOST}`, 'channel'),
  });

  app.listen(() => null);
}
bootstrap();
