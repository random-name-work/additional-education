import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Additional Education docs')
    .setDescription('The additional education API description')
    .setVersion('1.0')
    .addTag('roles')
    .addTag('auth')
    .addTag('user')
    .addTag('chat')
    .addTag('sort')
    .addTag('blog')
    .addTag('course')
    .addTag('test')
    .addTag('videolection')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
