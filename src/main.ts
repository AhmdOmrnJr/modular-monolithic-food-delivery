import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // rawBody: true enables raw Buffer access on req.rawBody for Stripe signature verification
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { rawBody: true });

  // Setup EJS for test harness
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');

  // Global pipes & middleware
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips out properties not in the DTO
      transform: true, // automatically transform payloads to DTO instances
    }),
  );
  
  app.use(cookieParser());
  
  app.enableCors(); // allow cross-origin requests

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('Food Delivery API')
    .setDescription('Modular Monolithic Food Delivery API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 3000;
  const baseUrl = process.env.APP_BASE_URL || `http://localhost:${port}`;

  await app.listen(port);
  console.log(`🚀 Server running on ${baseUrl}`);
  console.log(`📖 API docs: ${baseUrl}/api-docs`);
}
bootstrap();
