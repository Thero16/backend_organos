import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  const config = new DocumentBuilder()
    .setTitle('API de Ejemplo')
    .setDescription('Documentación de la API de ejemplo')
    .setVersion('1.0')
    .addTag('usuarios')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: "*", // Permite todos los orígenes
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Permite todos los métodos
    allowedHeaders: ["Content-Type", "Authorization"], // Permite los encabezados necesarios
    credentials: true, // Si es necesario enviar cookies o autenticación
  });
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
