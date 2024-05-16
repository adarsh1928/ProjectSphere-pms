import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ TypeOrmModule.forRoot(dataSourceOptions),UsersModule, ProjectModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}